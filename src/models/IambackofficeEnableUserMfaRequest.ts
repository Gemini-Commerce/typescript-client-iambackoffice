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
 * @interface IambackofficeEnableUserMfaRequest
 */
export interface IambackofficeEnableUserMfaRequest {
    /**
     * 
     * @type {string}
     * @memberof IambackofficeEnableUserMfaRequest
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof IambackofficeEnableUserMfaRequest
     */
    'secret'?: string;
    /**
     * 
     * @type {string}
     * @memberof IambackofficeEnableUserMfaRequest
     */
    'code'?: string;
}
