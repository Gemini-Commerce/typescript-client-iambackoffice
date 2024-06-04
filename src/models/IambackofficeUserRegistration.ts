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
 * @interface IambackofficeUserRegistration
 */
export interface IambackofficeUserRegistration {
    /**
     * 
     * @type {string}
     * @memberof IambackofficeUserRegistration
     */
    'tenantId'?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof IambackofficeUserRegistration
     */
    'data'?: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof IambackofficeUserRegistration
     */
    'preferredLanguages'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof IambackofficeUserRegistration
     */
    'roles'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IambackofficeUserRegistration
     */
    'timezone'?: string;
}
