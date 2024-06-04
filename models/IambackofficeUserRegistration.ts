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

import { HttpFile } from '../http/http';

export class IambackofficeUserRegistration {
    'tenantId'?: string;
    'data'?: { [key: string]: string; };
    'preferredLanguages'?: Array<string>;
    'roles'?: Array<string>;
    'timezone'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "preferredLanguages",
            "baseName": "preferredLanguages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IambackofficeUserRegistration.attributeTypeMap;
    }

    public constructor() {
    }
}
