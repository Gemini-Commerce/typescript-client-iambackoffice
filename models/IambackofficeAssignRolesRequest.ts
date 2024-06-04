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

export class IambackofficeAssignRolesRequest {
    'loginId'?: string;
    'tenantId'?: string;
    'roleCodes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "loginId",
            "baseName": "loginId",
            "type": "string",
            "format": ""
        },
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "roleCodes",
            "baseName": "roleCodes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IambackofficeAssignRolesRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

