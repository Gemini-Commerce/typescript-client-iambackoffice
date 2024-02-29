import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { IamBackofficeApiRequestFactory, IamBackofficeApiResponseProcessor} from "../apis/IamBackofficeApi";
export class ObservableIamBackofficeApi {
    private requestFactory: IamBackofficeApiRequestFactory;
    private responseProcessor: IamBackofficeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: IamBackofficeApiRequestFactory,
        responseProcessor?: IamBackofficeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IamBackofficeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IamBackofficeApiResponseProcessor();
    }

    /**
     * AUTHZ
     * @param body 
     */
    public iamBackofficeAssignRolesWithHttpInfo(body: IambackofficeAssignRolesRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeAssignRolesResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeAssignRoles(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeAssignRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * AUTHZ
     * @param body 
     */
    public iamBackofficeAssignRoles(body: IambackofficeAssignRolesRequest, _options?: Configuration): Observable<IambackofficeAssignRolesResponse> {
        return this.iamBackofficeAssignRolesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeAssignRolesResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public iamBackofficeAssignUserToGroupWithHttpInfo(body: IambackofficeAssignUserToGroupRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.iamBackofficeAssignUserToGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeAssignUserToGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public iamBackofficeAssignUserToGroup(body: IambackofficeAssignUserToGroupRequest, _options?: Configuration): Observable<any> {
        return this.iamBackofficeAssignUserToGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * GROUPS
     * @param body 
     */
    public iamBackofficeCreateGroupWithHttpInfo(body: IambackofficeCreateGroupRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeCreateGroupResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeCreateGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeCreateGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * GROUPS
     * @param body 
     */
    public iamBackofficeCreateGroup(body: IambackofficeCreateGroupRequest, _options?: Configuration): Observable<IambackofficeCreateGroupResponse> {
        return this.iamBackofficeCreateGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeCreateGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public iamBackofficeDisableUserMfaWithHttpInfo(body: IambackofficeDisableUserMfaRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeUserMfaResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeDisableUserMfa(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeDisableUserMfaWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public iamBackofficeDisableUserMfa(body: IambackofficeDisableUserMfaRequest, _options?: Configuration): Observable<IambackofficeUserMfaResponse> {
        return this.iamBackofficeDisableUserMfaWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeUserMfaResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public iamBackofficeEnableUserMfaWithHttpInfo(body: IambackofficeEnableUserMfaRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeUserMfaResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeEnableUserMfa(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeEnableUserMfaWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public iamBackofficeEnableUserMfa(body: IambackofficeEnableUserMfaRequest, _options?: Configuration): Observable<IambackofficeUserMfaResponse> {
        return this.iamBackofficeEnableUserMfaWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeUserMfaResponse>) => apiResponse.data));
    }

    /**
     * MFA
     * @param body 
     */
    public iamBackofficeGenerateSecretForQRWithHttpInfo(body: any, _options?: Configuration): Observable<HttpInfo<IambackofficeGenerateSecretForQRResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeGenerateSecretForQR(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeGenerateSecretForQRWithHttpInfo(rsp)));
            }));
    }

    /**
     * MFA
     * @param body 
     */
    public iamBackofficeGenerateSecretForQR(body: any, _options?: Configuration): Observable<IambackofficeGenerateSecretForQRResponse> {
        return this.iamBackofficeGenerateSecretForQRWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeGenerateSecretForQRResponse>) => apiResponse.data));
    }

    /**
     * USER
     * @param body 
     */
    public iamBackofficeGetUserWithHttpInfo(body: IambackofficeGetUserRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeGetUserResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeGetUser(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeGetUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * USER
     * @param body 
     */
    public iamBackofficeGetUser(body: IambackofficeGetUserRequest, _options?: Configuration): Observable<IambackofficeGetUserResponse> {
        return this.iamBackofficeGetUserWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeGetUserResponse>) => apiResponse.data));
    }

    /**
     * LOGIN
     * @param body 
     */
    public iamBackofficeLoginWithHttpInfo(body: IambackofficeLoginRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeLoginResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeLogin(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeLoginWithHttpInfo(rsp)));
            }));
    }

    /**
     * LOGIN
     * @param body 
     */
    public iamBackofficeLogin(body: IambackofficeLoginRequest, _options?: Configuration): Observable<IambackofficeLoginResponse> {
        return this.iamBackofficeLoginWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeLoginResponse>) => apiResponse.data));
    }

    /**
     * LOGIN MFA
     * @param body 
     */
    public iamBackofficeLoginMfaWithHttpInfo(body: IambackofficeLoginMfaRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeLoginResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeLoginMfa(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeLoginMfaWithHttpInfo(rsp)));
            }));
    }

    /**
     * LOGIN MFA
     * @param body 
     */
    public iamBackofficeLoginMfa(body: IambackofficeLoginMfaRequest, _options?: Configuration): Observable<IambackofficeLoginResponse> {
        return this.iamBackofficeLoginMfaWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeLoginResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public iamBackofficeLogoutWithHttpInfo(body: IambackofficeLogoutRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeLogoutResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeLogout(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeLogoutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public iamBackofficeLogout(body: IambackofficeLogoutRequest, _options?: Configuration): Observable<IambackofficeLogoutResponse> {
        return this.iamBackofficeLogoutWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeLogoutResponse>) => apiResponse.data));
    }

    /**
     * REGISTRATION
     * @param body 
     */
    public iamBackofficeRegisterWithHttpInfo(body: IambackofficeRegistrationRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeRegistrationResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeRegister(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeRegisterWithHttpInfo(rsp)));
            }));
    }

    /**
     * REGISTRATION
     * @param body 
     */
    public iamBackofficeRegister(body: IambackofficeRegistrationRequest, _options?: Configuration): Observable<IambackofficeRegistrationResponse> {
        return this.iamBackofficeRegisterWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeRegistrationResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public iamBackofficeSearchGroupsWithHttpInfo(body: IambackofficeSearchGroupsRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeSearchGroupsResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeSearchGroups(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeSearchGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public iamBackofficeSearchGroups(body: IambackofficeSearchGroupsRequest, _options?: Configuration): Observable<IambackofficeSearchGroupsResponse> {
        return this.iamBackofficeSearchGroupsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeSearchGroupsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public iamBackofficeUnassignRolesWithHttpInfo(body: IambackofficeUnassignRolesRequest, _options?: Configuration): Observable<HttpInfo<IambackofficeUnassignRolesResponse>> {
        const requestContextPromise = this.requestFactory.iamBackofficeUnassignRoles(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.iamBackofficeUnassignRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public iamBackofficeUnassignRoles(body: IambackofficeUnassignRolesRequest, _options?: Configuration): Observable<IambackofficeUnassignRolesResponse> {
        return this.iamBackofficeUnassignRolesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<IambackofficeUnassignRolesResponse>) => apiResponse.data));
    }

}
