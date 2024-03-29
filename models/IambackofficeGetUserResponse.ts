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

import { IambackofficeUser } from '../models/IambackofficeUser';
import { HttpFile } from '../http/http';

export class IambackofficeGetUserResponse {
    'user'?: IambackofficeUser;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "IambackofficeUser",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IambackofficeGetUserResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

