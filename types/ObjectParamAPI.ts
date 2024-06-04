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

import { ObservableIamBackofficeApi } from "./ObservableAPI";
import { IamBackofficeApiRequestFactory, IamBackofficeApiResponseProcessor} from "../apis/IamBackofficeApi";

export interface IamBackofficeApiIamBackofficeAssignRolesRequest {
    /**
     * 
     * @type IambackofficeAssignRolesRequest
     * @memberof IamBackofficeApiiamBackofficeAssignRoles
     */
    body: IambackofficeAssignRolesRequest
}

export interface IamBackofficeApiIamBackofficeAssignUserToGroupRequest {
    /**
     * 
     * @type IambackofficeAssignUserToGroupRequest
     * @memberof IamBackofficeApiiamBackofficeAssignUserToGroup
     */
    body: IambackofficeAssignUserToGroupRequest
}

export interface IamBackofficeApiIamBackofficeCreateGroupRequest {
    /**
     * 
     * @type IambackofficeCreateGroupRequest
     * @memberof IamBackofficeApiiamBackofficeCreateGroup
     */
    body: IambackofficeCreateGroupRequest
}

export interface IamBackofficeApiIamBackofficeDisableUserMfaRequest {
    /**
     * 
     * @type IambackofficeDisableUserMfaRequest
     * @memberof IamBackofficeApiiamBackofficeDisableUserMfa
     */
    body: IambackofficeDisableUserMfaRequest
}

export interface IamBackofficeApiIamBackofficeEnableUserMfaRequest {
    /**
     * 
     * @type IambackofficeEnableUserMfaRequest
     * @memberof IamBackofficeApiiamBackofficeEnableUserMfa
     */
    body: IambackofficeEnableUserMfaRequest
}

export interface IamBackofficeApiIamBackofficeGenerateSecretForQRRequest {
    /**
     * 
     * @type any
     * @memberof IamBackofficeApiiamBackofficeGenerateSecretForQR
     */
    body: any
}

export interface IamBackofficeApiIamBackofficeGetUserRequest {
    /**
     * 
     * @type IambackofficeGetUserRequest
     * @memberof IamBackofficeApiiamBackofficeGetUser
     */
    body: IambackofficeGetUserRequest
}

export interface IamBackofficeApiIamBackofficeLoginRequest {
    /**
     * 
     * @type IambackofficeLoginRequest
     * @memberof IamBackofficeApiiamBackofficeLogin
     */
    body: IambackofficeLoginRequest
}

export interface IamBackofficeApiIamBackofficeLoginMfaRequest {
    /**
     * 
     * @type IambackofficeLoginMfaRequest
     * @memberof IamBackofficeApiiamBackofficeLoginMfa
     */
    body: IambackofficeLoginMfaRequest
}

export interface IamBackofficeApiIamBackofficeLogoutRequest {
    /**
     * 
     * @type IambackofficeLogoutRequest
     * @memberof IamBackofficeApiiamBackofficeLogout
     */
    body: IambackofficeLogoutRequest
}

export interface IamBackofficeApiIamBackofficeRegisterRequest {
    /**
     * 
     * @type IambackofficeRegistrationRequest
     * @memberof IamBackofficeApiiamBackofficeRegister
     */
    body: IambackofficeRegistrationRequest
}

export interface IamBackofficeApiIamBackofficeSearchGroupsRequest {
    /**
     * 
     * @type IambackofficeSearchGroupsRequest
     * @memberof IamBackofficeApiiamBackofficeSearchGroups
     */
    body: IambackofficeSearchGroupsRequest
}

export interface IamBackofficeApiIamBackofficeUnassignRolesRequest {
    /**
     * 
     * @type IambackofficeUnassignRolesRequest
     * @memberof IamBackofficeApiiamBackofficeUnassignRoles
     */
    body: IambackofficeUnassignRolesRequest
}

export class ObjectIamBackofficeApi {
    private api: ObservableIamBackofficeApi

    public constructor(configuration: Configuration, requestFactory?: IamBackofficeApiRequestFactory, responseProcessor?: IamBackofficeApiResponseProcessor) {
        this.api = new ObservableIamBackofficeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * AUTHZ
     * @param param the request object
     */
    public iamBackofficeAssignRolesWithHttpInfo(param: IamBackofficeApiIamBackofficeAssignRolesRequest, options?: Configuration): Promise<HttpInfo<IambackofficeAssignRolesResponse>> {
        return this.api.iamBackofficeAssignRolesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * AUTHZ
     * @param param the request object
     */
    public iamBackofficeAssignRoles(param: IamBackofficeApiIamBackofficeAssignRolesRequest, options?: Configuration): Promise<IambackofficeAssignRolesResponse> {
        return this.api.iamBackofficeAssignRoles(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeAssignUserToGroupWithHttpInfo(param: IamBackofficeApiIamBackofficeAssignUserToGroupRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.iamBackofficeAssignUserToGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeAssignUserToGroup(param: IamBackofficeApiIamBackofficeAssignUserToGroupRequest, options?: Configuration): Promise<any> {
        return this.api.iamBackofficeAssignUserToGroup(param.body,  options).toPromise();
    }

    /**
     * GROUPS
     * @param param the request object
     */
    public iamBackofficeCreateGroupWithHttpInfo(param: IamBackofficeApiIamBackofficeCreateGroupRequest, options?: Configuration): Promise<HttpInfo<IambackofficeCreateGroupResponse>> {
        return this.api.iamBackofficeCreateGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * GROUPS
     * @param param the request object
     */
    public iamBackofficeCreateGroup(param: IamBackofficeApiIamBackofficeCreateGroupRequest, options?: Configuration): Promise<IambackofficeCreateGroupResponse> {
        return this.api.iamBackofficeCreateGroup(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeDisableUserMfaWithHttpInfo(param: IamBackofficeApiIamBackofficeDisableUserMfaRequest, options?: Configuration): Promise<HttpInfo<IambackofficeUserMfaResponse>> {
        return this.api.iamBackofficeDisableUserMfaWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeDisableUserMfa(param: IamBackofficeApiIamBackofficeDisableUserMfaRequest, options?: Configuration): Promise<IambackofficeUserMfaResponse> {
        return this.api.iamBackofficeDisableUserMfa(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeEnableUserMfaWithHttpInfo(param: IamBackofficeApiIamBackofficeEnableUserMfaRequest, options?: Configuration): Promise<HttpInfo<IambackofficeUserMfaResponse>> {
        return this.api.iamBackofficeEnableUserMfaWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeEnableUserMfa(param: IamBackofficeApiIamBackofficeEnableUserMfaRequest, options?: Configuration): Promise<IambackofficeUserMfaResponse> {
        return this.api.iamBackofficeEnableUserMfa(param.body,  options).toPromise();
    }

    /**
     * MFA
     * @param param the request object
     */
    public iamBackofficeGenerateSecretForQRWithHttpInfo(param: IamBackofficeApiIamBackofficeGenerateSecretForQRRequest, options?: Configuration): Promise<HttpInfo<IambackofficeGenerateSecretForQRResponse>> {
        return this.api.iamBackofficeGenerateSecretForQRWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * MFA
     * @param param the request object
     */
    public iamBackofficeGenerateSecretForQR(param: IamBackofficeApiIamBackofficeGenerateSecretForQRRequest, options?: Configuration): Promise<IambackofficeGenerateSecretForQRResponse> {
        return this.api.iamBackofficeGenerateSecretForQR(param.body,  options).toPromise();
    }

    /**
     * USER
     * @param param the request object
     */
    public iamBackofficeGetUserWithHttpInfo(param: IamBackofficeApiIamBackofficeGetUserRequest, options?: Configuration): Promise<HttpInfo<IambackofficeGetUserResponse>> {
        return this.api.iamBackofficeGetUserWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * USER
     * @param param the request object
     */
    public iamBackofficeGetUser(param: IamBackofficeApiIamBackofficeGetUserRequest, options?: Configuration): Promise<IambackofficeGetUserResponse> {
        return this.api.iamBackofficeGetUser(param.body,  options).toPromise();
    }

    /**
     * LOGIN
     * @param param the request object
     */
    public iamBackofficeLoginWithHttpInfo(param: IamBackofficeApiIamBackofficeLoginRequest, options?: Configuration): Promise<HttpInfo<IambackofficeLoginResponse>> {
        return this.api.iamBackofficeLoginWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * LOGIN
     * @param param the request object
     */
    public iamBackofficeLogin(param: IamBackofficeApiIamBackofficeLoginRequest, options?: Configuration): Promise<IambackofficeLoginResponse> {
        return this.api.iamBackofficeLogin(param.body,  options).toPromise();
    }

    /**
     * LOGIN MFA
     * @param param the request object
     */
    public iamBackofficeLoginMfaWithHttpInfo(param: IamBackofficeApiIamBackofficeLoginMfaRequest, options?: Configuration): Promise<HttpInfo<IambackofficeLoginResponse>> {
        return this.api.iamBackofficeLoginMfaWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * LOGIN MFA
     * @param param the request object
     */
    public iamBackofficeLoginMfa(param: IamBackofficeApiIamBackofficeLoginMfaRequest, options?: Configuration): Promise<IambackofficeLoginResponse> {
        return this.api.iamBackofficeLoginMfa(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeLogoutWithHttpInfo(param: IamBackofficeApiIamBackofficeLogoutRequest, options?: Configuration): Promise<HttpInfo<IambackofficeLogoutResponse>> {
        return this.api.iamBackofficeLogoutWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeLogout(param: IamBackofficeApiIamBackofficeLogoutRequest, options?: Configuration): Promise<IambackofficeLogoutResponse> {
        return this.api.iamBackofficeLogout(param.body,  options).toPromise();
    }

    /**
     * REGISTRATION
     * @param param the request object
     */
    public iamBackofficeRegisterWithHttpInfo(param: IamBackofficeApiIamBackofficeRegisterRequest, options?: Configuration): Promise<HttpInfo<IambackofficeRegistrationResponse>> {
        return this.api.iamBackofficeRegisterWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * REGISTRATION
     * @param param the request object
     */
    public iamBackofficeRegister(param: IamBackofficeApiIamBackofficeRegisterRequest, options?: Configuration): Promise<IambackofficeRegistrationResponse> {
        return this.api.iamBackofficeRegister(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeSearchGroupsWithHttpInfo(param: IamBackofficeApiIamBackofficeSearchGroupsRequest, options?: Configuration): Promise<HttpInfo<IambackofficeSearchGroupsResponse>> {
        return this.api.iamBackofficeSearchGroupsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeSearchGroups(param: IamBackofficeApiIamBackofficeSearchGroupsRequest, options?: Configuration): Promise<IambackofficeSearchGroupsResponse> {
        return this.api.iamBackofficeSearchGroups(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeUnassignRolesWithHttpInfo(param: IamBackofficeApiIamBackofficeUnassignRolesRequest, options?: Configuration): Promise<HttpInfo<IambackofficeUnassignRolesResponse>> {
        return this.api.iamBackofficeUnassignRolesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public iamBackofficeUnassignRoles(param: IamBackofficeApiIamBackofficeUnassignRolesRequest, options?: Configuration): Promise<IambackofficeUnassignRolesResponse> {
        return this.api.iamBackofficeUnassignRoles(param.body,  options).toPromise();
    }

}
