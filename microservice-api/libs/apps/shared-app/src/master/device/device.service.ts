import { Injectable } from '@nestjs/common';
import { DeviceEntity } from './entities/device.entity';
import { ConfService, DataValidationPipe, LibraryAppService, LogService } from '@libs/library-app';
import { Repository } from 'typeorm';
import { UAParser } from 'ua-parser-js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeviceService {
private uaParser: UAParser;
constructor(
    @InjectRepository(DeviceEntity)
    private readonly repository: Repository<DeviceEntity>,

    private readonly confService: ConfService,
    private readonly logService: LogService,
    private readonly DataValidationPipe: DataValidationPipe,
    private readonly libraryAppService: LibraryAppService,
){
    // set up user agent parser
    this.uaParser = new UAParser();
}
parseUserAgent(userAgentString: string) {
    this.uaParser.setUA(userAgentString);
    return this.uaParser.getResult();
}

/**
 * This mmethod work with npm package [UAParser()]
 * https://www.npmjs.com/package/ua-parser-js
 * If you change this default package need to adjust database values in table
 * Change of library will bring lot of maintance work, so be careful
 **/
async identifyDevice(user_agent: string, ip: string): Promise<DeviceEntity> {

/*
// sample trial input
const ualist ={
    'andoid': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
    'samsung': 'Mozilla/5.0 (Linux; Android 13; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
    'googlepixel': 'Mozilla/5.0 (Linux; Android 13; Pixel 7 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
    'motorola': 'Mozilla/5.0 (Linux; Android 12; moto g pure) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
    'redmenote': 'Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
    'iphonese': 'Mozilla/5.0 (iPhone14,6; U; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19E241 Safari/602.1',
    'iphone13promax': 'Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1',
    'iphonexrsfati': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
    'iphonexschrome': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1',
    'iphonexsfirefox': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/13.2b11866 Mobile/16A366 Safari/605.1.15',
    'mslumia': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; RM-1152) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254',
    'samsunggalexytab': 'Mozilla/5.0 (Linux; Android 12; SM-X906C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.119 Mobile Safari/537.36',
    'lenovoyogatab': 'Mozilla/5.0 (Linux; Android 11; Lenovo YT-J706X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
    'nvideashildtab': 'Mozilla/5.0 (Linux; Android 6.0.1; SHIELD Tablet K1 Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Safari/537.36',
    'lggpad': 'Mozilla/5.0 (Linux; Android 5.0.2; LG-V410/V41020c Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Safari/537.36',
    'win10edge': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    'chromebook': 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36',
    'macossafari': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
    'linuxfirefix': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1',
    'googlesetopbox': 'Dalvik/2.1.0 (Linux; U; Android 9; ADT-2 Build/PTT5.181126.002)',
    'rokuultra': 'Roku4640X/DVP-7.70 (297.70E04154A)',
    'amazone4kfiretv': 'Mozilla/5.0 (Linux; Android 5.1; AFTS Build/LMY47O) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/41.99900.2250.0242 Safari/537.36',
    'appletv': 'AppleTV11,1/11.1',
    'playstation5': 'Mozilla/5.0 (PlayStation; PlayStation 5/2.26) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15',
    'xboxx': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox Series X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36 Edge/20.02',
    'googlebot': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'amazonekindel': 'Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+',
    };

    // loop through to check output
    let list: any[] = [];
    Object.entries(ualist).forEach(([key, value]) => {
        list.push({
            name: key,
            val: this.parseUserAgent(value),
        });
    });
    console.log(list);
    */
    /*
    sample output of [this.parseUserAgent(value)]
    {
        browser: {name: 'Chrome WebView', version: '80.0.3987.119', major: '80'}
        cpu: {architecture: undefined}
        device: {vendor: 'Samsung', model: 'SM-X906C', type: 'tablet'}
        engine: {name: 'Blink', version: '80.0.3987.119'}
        os: {name: 'Android', version: '12'}
        ua: 'Mozilla/5.0 (Linux; Android 12; SM-X906C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.119 Mobile Safari/537.36'
    }
    */  
    // get the infom from user-agent string
    const ua = this.parseUserAgent(user_agent);

    // set the device info as per entity
    const device = new DeviceEntity();

    // set data as per UAParser() output
    device.name = this.objectToString(ua.device);
    device.os = this.objectToString(ua.os);
    device.interface = ua?.browser?.name;

    // we are creating a patten which can affect future data, so be careful
    // need to add some hack as sometime data is not availabe
    if( device.name === '' || device.name === undefined ) {
        device.name = user_agent.toLowerCase().includes('bot') ? `bot` : `desktop`;
    }

    if( device.os === '' || device.os === undefined ) {
        device.os = `${ua.device.type ? ua.device.type : `desktop`} os`;
    }

    if( device.interface === '' || device.interface === undefined ) {
        device.interface = `${ua.device.type ? ua.device.type : `desktop`}`;
    }

    // convert to lowercase
    device.name = device.name.toLowerCase();
    device.os = device.os.toLowerCase();
    device.interface = device.interface.toLowerCase();

    // get columns of entity as we need to find all fields to perform checking
    const cols = this.libraryAppService.entityFieldsArr<DeviceEntity>(this.repository.metadata.columns);

    // fidn the agent as per set data
    const findDevice = await this.repository.findOne({
        select: cols,
        where: device,
        withDeleted: true
    });

    // check the and take action as needd
    if(findDevice !== null && typeof findDevice.id === 'number') {
        return findDevice;
    } else {
        // as device not found then create new one
        // this is how we auto create device database
        device.user_agent = ua.ua;
        const newDevice = await this.repository.create(device);
        const created = await this.repository.save(newDevice);

        // we need to make sure and also need all fields list as we need to go though verificatino
        // so get newly created device and return
        const getnew = await this.repository.findOne({
            select: cols,
            where: created,
            withDeleted: true
        });
        return getnew as DeviceEntity;
    }
}
objectToString(obj: any) {
    // Get entries of the object and filter out undefined values
    const entries = Object.entries(obj)
        .filter(([key, value]) => value !== undefined);

    // Convert the entries to strings in "key=value" format
    const keyValueStrings = entries.map(([key, value]) => `${value}`); // `${key}=${value}`

    // Join the strings with a comma and a space
    return keyValueStrings.join(' ');
}
async findOneById(id: number): Promise<DeviceEntity | null> {
    return await this.repository.findOneBy({ id: id });
}
}
