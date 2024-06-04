/* tslint:disable */
/* eslint-disable */
/**
 * IamBackoffice Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface IambackofficeLoginResponse
 */
export interface IambackofficeLoginResponse {
    /**
     * 
     * @type {ProtobufAny}
     * @memberof IambackofficeLoginResponse
     */
    'tokens'?: ProtobufAny;
    /**
     * 
     * @type {IambackofficeUser}
     * @memberof IambackofficeLoginResponse
     */
    'user'?: IambackofficeUser;
    /**
     * 
     * @type {Array<IambackofficeTwoFactorMethod>}
     * @memberof IambackofficeLoginResponse
     */
    'methods'?: Array<IambackofficeTwoFactorMethod>;
    /**
     * 
     * @type {string}
     * @memberof IambackofficeLoginResponse
     */
    'twoFactorId'?: string;
    /**
     * 
     * @type {string}
     * @memberof IambackofficeLoginResponse
     */
    'tenantId'?: string;
}
