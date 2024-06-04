/**
 * IamBackoffice Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IambackofficeDevice } from '../models/IambackofficeDevice';
import { HttpFile } from '../http/http';

export class IambackofficeMetaData {
    'device'?: IambackofficeDevice;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "device",
            "baseName": "device",
            "type": "IambackofficeDevice",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IambackofficeMetaData.attributeTypeMap;
    }

    public constructor() {
    }
}
