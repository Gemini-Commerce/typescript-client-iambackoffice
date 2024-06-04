import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { IambackofficeAssignRolesRequest } from '../models/IambackofficeAssignRolesRequest';
import { IambackofficeAssignRolesResponse } from '../models/IambackofficeAssignRolesResponse';
import { IambackofficeAssignUserToGroupRequest } from '../models/IambackofficeAssignUserToGroupRequest';
import { IambackofficeAuthenticatorConfiguration } from '../models/IambackofficeAuthenticatorConfiguration';
import { IambackofficeCreateGroupRequest } from '../models/IambackofficeCreateGroupRequest';
import { IambackofficeCreateGroupResponse } from '../models/IambackofficeCreateGroupResponse';
import { IambackofficeDevice } from '../models/IambackofficeDevice';
import { IambackofficeDisableUserMfaRequest } from '../models/IambackofficeDisableUserMfaRequest';
import { IambackofficeEnableUserMfaRequest } from '../models/IambackofficeEnableUserMfaRequest';
import { IambackofficeGenerateSecretForQRResponse } from '../models/IambackofficeGenerateSecretForQRResponse';
import { IambackofficeGetUserRequest } from '../models/IambackofficeGetUserRequest';
import { IambackofficeGetUserResponse } from '../models/IambackofficeGetUserResponse';
import { IambackofficeGroup } from '../models/IambackofficeGroup';
import { IambackofficeLoginMfaRequest } from '../models/IambackofficeLoginMfaRequest';
import { IambackofficeLoginRequest } from '../models/IambackofficeLoginRequest';
import { IambackofficeLoginResponse } from '../models/IambackofficeLoginResponse';
import { IambackofficeLogoutRequest } from '../models/IambackofficeLogoutRequest';
import { IambackofficeLogoutResponse } from '../models/IambackofficeLogoutResponse';
import { IambackofficeMetaData } from '../models/IambackofficeMetaData';
import { IambackofficeRegistrationRequest } from '../models/IambackofficeRegistrationRequest';
import { IambackofficeRegistrationResponse } from '../models/IambackofficeRegistrationResponse';
import { IambackofficeSearchGroupsRequest } from '../models/IambackofficeSearchGroupsRequest';
import { IambackofficeSearchGroupsResponse } from '../models/IambackofficeSearchGroupsResponse';
import { IambackofficeTwoFactorMethod } from '../models/IambackofficeTwoFactorMethod';
import { IambackofficeUnassignRolesRequest } from '../models/IambackofficeUnassignRolesRequest';
import { IambackofficeUnassignRolesResponse } from '../models/IambackofficeUnassignRolesResponse';
import { IambackofficeUser } from '../models/IambackofficeUser';
import { IambackofficeUserMfaResponse } from '../models/IambackofficeUserMfaResponse';
import { IambackofficeUserRegistration } from '../models/IambackofficeUserRegistration';
import { IambackofficeUserTwoFactorConfiguration } from '../models/IambackofficeUserTwoFactorConfiguration';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';
import { SearchGroupsRequestFilters } from '../models/SearchGroupsRequestFilters';
import { ObservableIamBackofficeApi } from './ObservableAPI';

import { IamBackofficeApiRequestFactory, IamBackofficeApiResponseProcessor} from "../apis/IamBackofficeApi";
export class PromiseIamBackofficeApi {
    private api: ObservableIamBackofficeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IamBackofficeApiRequestFactory,
        responseProcessor?: IamBackofficeApiResponseProcessor
    ) {
        this.api = new ObservableIamBackofficeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * AUTHZ
     * @param body 
     */
    public iamBackofficeAssignRolesWithHttpInfo(body: IambackofficeAssignRolesRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeAssignRolesResponse>> {
        const result = this.api.iamBackofficeAssignRolesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * AUTHZ
     * @param body 
     */
    public iamBackofficeAssignRoles(body: IambackofficeAssignRolesRequest, _options?: Configuration): Promise<IambackofficeAssignRolesResponse> {
        const result = this.api.iamBackofficeAssignRoles(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeAssignUserToGroupWithHttpInfo(body: IambackofficeAssignUserToGroupRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.iamBackofficeAssignUserToGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeAssignUserToGroup(body: IambackofficeAssignUserToGroupRequest, _options?: Configuration): Promise<any> {
        const result = this.api.iamBackofficeAssignUserToGroup(body, _options);
        return result.toPromise();
    }

    /**
     * GROUPS
     * @param body 
     */
    public iamBackofficeCreateGroupWithHttpInfo(body: IambackofficeCreateGroupRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeCreateGroupResponse>> {
        const result = this.api.iamBackofficeCreateGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * GROUPS
     * @param body 
     */
    public iamBackofficeCreateGroup(body: IambackofficeCreateGroupRequest, _options?: Configuration): Promise<IambackofficeCreateGroupResponse> {
        const result = this.api.iamBackofficeCreateGroup(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeDisableUserMfaWithHttpInfo(body: IambackofficeDisableUserMfaRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeUserMfaResponse>> {
        const result = this.api.iamBackofficeDisableUserMfaWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeDisableUserMfa(body: IambackofficeDisableUserMfaRequest, _options?: Configuration): Promise<IambackofficeUserMfaResponse> {
        const result = this.api.iamBackofficeDisableUserMfa(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeEnableUserMfaWithHttpInfo(body: IambackofficeEnableUserMfaRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeUserMfaResponse>> {
        const result = this.api.iamBackofficeEnableUserMfaWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeEnableUserMfa(body: IambackofficeEnableUserMfaRequest, _options?: Configuration): Promise<IambackofficeUserMfaResponse> {
        const result = this.api.iamBackofficeEnableUserMfa(body, _options);
        return result.toPromise();
    }

    /**
     * MFA
     * @param body 
     */
    public iamBackofficeGenerateSecretForQRWithHttpInfo(body: any, _options?: Configuration): Promise<HttpInfo<IambackofficeGenerateSecretForQRResponse>> {
        const result = this.api.iamBackofficeGenerateSecretForQRWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * MFA
     * @param body 
     */
    public iamBackofficeGenerateSecretForQR(body: any, _options?: Configuration): Promise<IambackofficeGenerateSecretForQRResponse> {
        const result = this.api.iamBackofficeGenerateSecretForQR(body, _options);
        return result.toPromise();
    }

    /**
     * USER
     * @param body 
     */
    public iamBackofficeGetUserWithHttpInfo(body: IambackofficeGetUserRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeGetUserResponse>> {
        const result = this.api.iamBackofficeGetUserWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * USER
     * @param body 
     */
    public iamBackofficeGetUser(body: IambackofficeGetUserRequest, _options?: Configuration): Promise<IambackofficeGetUserResponse> {
        const result = this.api.iamBackofficeGetUser(body, _options);
        return result.toPromise();
    }

    /**
     * LOGIN
     * @param body 
     */
    public iamBackofficeLoginWithHttpInfo(body: IambackofficeLoginRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeLoginResponse>> {
        const result = this.api.iamBackofficeLoginWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * LOGIN
     * @param body 
     */
    public iamBackofficeLogin(body: IambackofficeLoginRequest, _options?: Configuration): Promise<IambackofficeLoginResponse> {
        const result = this.api.iamBackofficeLogin(body, _options);
        return result.toPromise();
    }

    /**
     * LOGIN MFA
     * @param body 
     */
    public iamBackofficeLoginMfaWithHttpInfo(body: IambackofficeLoginMfaRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeLoginResponse>> {
        const result = this.api.iamBackofficeLoginMfaWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * LOGIN MFA
     * @param body 
     */
    public iamBackofficeLoginMfa(body: IambackofficeLoginMfaRequest, _options?: Configuration): Promise<IambackofficeLoginResponse> {
        const result = this.api.iamBackofficeLoginMfa(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeLogoutWithHttpInfo(body: IambackofficeLogoutRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeLogoutResponse>> {
        const result = this.api.iamBackofficeLogoutWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeLogout(body: IambackofficeLogoutRequest, _options?: Configuration): Promise<IambackofficeLogoutResponse> {
        const result = this.api.iamBackofficeLogout(body, _options);
        return result.toPromise();
    }

    /**
     * REGISTRATION
     * @param body 
     */
    public iamBackofficeRegisterWithHttpInfo(body: IambackofficeRegistrationRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeRegistrationResponse>> {
        const result = this.api.iamBackofficeRegisterWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * REGISTRATION
     * @param body 
     */
    public iamBackofficeRegister(body: IambackofficeRegistrationRequest, _options?: Configuration): Promise<IambackofficeRegistrationResponse> {
        const result = this.api.iamBackofficeRegister(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeSearchGroupsWithHttpInfo(body: IambackofficeSearchGroupsRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeSearchGroupsResponse>> {
        const result = this.api.iamBackofficeSearchGroupsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeSearchGroups(body: IambackofficeSearchGroupsRequest, _options?: Configuration): Promise<IambackofficeSearchGroupsResponse> {
        const result = this.api.iamBackofficeSearchGroups(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeUnassignRolesWithHttpInfo(body: IambackofficeUnassignRolesRequest, _options?: Configuration): Promise<HttpInfo<IambackofficeUnassignRolesResponse>> {
        const result = this.api.iamBackofficeUnassignRolesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public iamBackofficeUnassignRoles(body: IambackofficeUnassignRolesRequest, _options?: Configuration): Promise<IambackofficeUnassignRolesResponse> {
        const result = this.api.iamBackofficeUnassignRoles(body, _options);
        return result.toPromise();
    }


}



