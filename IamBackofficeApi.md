# .IamBackofficeApi

All URIs are relative to *https://iambackoffice.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iamBackofficeAssignRoles**](IamBackofficeApi.md#iamBackofficeAssignRoles) | **POST** /iambackoffice.IamBackoffice/AssignRoles | AUTHZ
[**iamBackofficeAssignUserToGroup**](IamBackofficeApi.md#iamBackofficeAssignUserToGroup) | **POST** /iambackoffice.IamBackoffice/AssignUserToGroup | 
[**iamBackofficeCreateGroup**](IamBackofficeApi.md#iamBackofficeCreateGroup) | **POST** /iambackoffice.IamBackoffice/CreateGroup | GROUPS
[**iamBackofficeDisableUserMfa**](IamBackofficeApi.md#iamBackofficeDisableUserMfa) | **POST** /iambackoffice.IamBackoffice/DisableUserMfa | 
[**iamBackofficeEnableUserMfa**](IamBackofficeApi.md#iamBackofficeEnableUserMfa) | **POST** /iambackoffice.IamBackoffice/EnableUserMfa | 
[**iamBackofficeGenerateSecretForQR**](IamBackofficeApi.md#iamBackofficeGenerateSecretForQR) | **POST** /iambackoffice.IamBackoffice/GenerateSecretForQR | MFA
[**iamBackofficeGetUser**](IamBackofficeApi.md#iamBackofficeGetUser) | **POST** /iambackoffice.IamBackoffice/GetUser | USER
[**iamBackofficeLogin**](IamBackofficeApi.md#iamBackofficeLogin) | **POST** /iambackoffice.IamBackoffice/Login | LOGIN
[**iamBackofficeLoginMfa**](IamBackofficeApi.md#iamBackofficeLoginMfa) | **POST** /iambackoffice.IamBackoffice/LoginMfa | LOGIN MFA
[**iamBackofficeLogout**](IamBackofficeApi.md#iamBackofficeLogout) | **POST** /iambackoffice.IamBackoffice/Logout | 
[**iamBackofficeRegister**](IamBackofficeApi.md#iamBackofficeRegister) | **POST** /iambackoffice.IamBackoffice/Register | REGISTRATION
[**iamBackofficeSearchGroups**](IamBackofficeApi.md#iamBackofficeSearchGroups) | **POST** /iambackoffice.IamBackoffice/SearchGroups | 
[**iamBackofficeUnassignRoles**](IamBackofficeApi.md#iamBackofficeUnassignRoles) | **POST** /iambackoffice.IamBackoffice/UnassignRoles | 


# **iamBackofficeAssignRoles**
> IambackofficeAssignRolesResponse iamBackofficeAssignRoles(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeAssignRolesRequest = {
  // IambackofficeAssignRolesRequest
  body: {
    loginId: "loginId_example",
    tenantId: "tenantId_example",
    roleCodes: [
      "roleCodes_example",
    ],
  },
};

apiInstance.iamBackofficeAssignRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeAssignRolesRequest**|  |


### Return type

**IambackofficeAssignRolesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeAssignUserToGroup**
> any iamBackofficeAssignUserToGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeAssignUserToGroupRequest = {
  // IambackofficeAssignUserToGroupRequest
  body: {
    tenantId: "tenantId_example",
    userId: "userId_example",
    groupId: "groupId_example",
  },
};

apiInstance.iamBackofficeAssignUserToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeAssignUserToGroupRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeCreateGroup**
> IambackofficeCreateGroupResponse iamBackofficeCreateGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeCreateGroupRequest = {
  // IambackofficeCreateGroupRequest
  body: {
    tenantId: "tenantId_example",
    name: "name_example",
    data: {
      "key": "key_example",
    },
  },
};

apiInstance.iamBackofficeCreateGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeCreateGroupRequest**|  |


### Return type

**IambackofficeCreateGroupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeDisableUserMfa**
> IambackofficeUserMfaResponse iamBackofficeDisableUserMfa(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeDisableUserMfaRequest = {
  // IambackofficeDisableUserMfaRequest
  body: {
    userId: "userId_example",
    code: "code_example",
    methodId: "methodId_example",
  },
};

apiInstance.iamBackofficeDisableUserMfa(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeDisableUserMfaRequest**|  |


### Return type

**IambackofficeUserMfaResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeEnableUserMfa**
> IambackofficeUserMfaResponse iamBackofficeEnableUserMfa(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeEnableUserMfaRequest = {
  // IambackofficeEnableUserMfaRequest
  body: {
    userId: "userId_example",
    secret: "secret_example",
    code: "code_example",
  },
};

apiInstance.iamBackofficeEnableUserMfa(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeEnableUserMfaRequest**|  |


### Return type

**IambackofficeUserMfaResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeGenerateSecretForQR**
> IambackofficeGenerateSecretForQRResponse iamBackofficeGenerateSecretForQR(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeGenerateSecretForQRRequest = {
  // any
  body: {},
};

apiInstance.iamBackofficeGenerateSecretForQR(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**IambackofficeGenerateSecretForQRResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeGetUser**
> IambackofficeGetUserResponse iamBackofficeGetUser(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeGetUserRequest = {
  // IambackofficeGetUserRequest
  body: {
    tenantId: "tenantId_example",
    userId: "userId_example",
    email: "email_example",
    username: "username_example",
  },
};

apiInstance.iamBackofficeGetUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeGetUserRequest**|  |


### Return type

**IambackofficeGetUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeLogin**
> IambackofficeLoginResponse iamBackofficeLogin(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeLoginRequest = {
  // IambackofficeLoginRequest
  body: {
    tenantId: "tenantId_example",
    ipAddress: "ipAddress_example",
    loginId: "loginId_example",
    metaData: {
      device: {
        description: "description_example",
        name: "name_example",
        deviceType: "deviceType_example",
      },
    },
    noTokens: true,
    password: "password_example",
    twoFactorTrustId: "twoFactorTrustId_example",
  },
};

apiInstance.iamBackofficeLogin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeLoginRequest**|  |


### Return type

**IambackofficeLoginResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeLoginMfa**
> IambackofficeLoginResponse iamBackofficeLoginMfa(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeLoginMfaRequest = {
  // IambackofficeLoginMfaRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    twoFactorId: "twoFactorId_example",
  },
};

apiInstance.iamBackofficeLoginMfa(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeLoginMfaRequest**|  |


### Return type

**IambackofficeLoginResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeLogout**
> IambackofficeLogoutResponse iamBackofficeLogout(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeLogoutRequest = {
  // IambackofficeLogoutRequest
  body: {
    global: true,
    tokens: 
      key: {},
    ,
  },
};

apiInstance.iamBackofficeLogout(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeLogoutRequest**|  |


### Return type

**IambackofficeLogoutResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeRegister**
> IambackofficeRegistrationResponse iamBackofficeRegister(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeRegisterRequest = {
  // IambackofficeRegistrationRequest
  body: {
    registration: {
      tenantId: "tenantId_example",
      data: {
        "key": "key_example",
      },
      preferredLanguages: [
        "preferredLanguages_example",
      ],
      roles: [
        "roles_example",
      ],
      timezone: "timezone_example",
    },
    sendSetPasswordEmail: true,
    skipRegistrationVerification: true,
    skipVerification: true,
    user: {
      active: true,
      birthDate: "birthDate_example",
      data: {
        "key": "key_example",
      },
      email: "email_example",
      firstName: "firstName_example",
      fullName: "fullName_example",
      id: "id_example",
      imageUrl: "imageUrl_example",
      insertInstant: "insertInstant_example",
      lastLoginInstant: "lastLoginInstant_example",
      lastName: "lastName_example",
      lastUpdateInstant: "lastUpdateInstant_example",
      middleName: "middleName_example",
      mobilePhone: "mobilePhone_example",
      password: "password_example",
      passwordChangeRequired: true,
      passwordLastUpdateInstant: "passwordLastUpdateInstant_example",
      preferredLanguages: [
        "preferredLanguages_example",
      ],
      registrations: [
        {
          tenantId: "tenantId_example",
          data: {
            "key": "key_example",
          },
          preferredLanguages: [
            "preferredLanguages_example",
          ],
          roles: [
            "roles_example",
          ],
          timezone: "timezone_example",
        },
      ],
      timezone: "timezone_example",
      twoFactor: {
        methods: [
          {
            authenticator: {
              algorithm: "algorithm_example",
              codeLength: 1,
              timeStep: 1,
            },
            email: "email_example",
            id: "id_example",
            method: "method_example",
            mobilePhone: "mobilePhone_example",
            secret: "secret_example",
          },
        ],
        recoveryCodes: [
          "recoveryCodes_example",
        ],
      },
      username: "username_example",
      verified: true,
    },
    tenantId: "tenantId_example",
  },
};

apiInstance.iamBackofficeRegister(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeRegistrationRequest**|  |


### Return type

**IambackofficeRegistrationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeSearchGroups**
> IambackofficeSearchGroupsResponse iamBackofficeSearchGroups(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeSearchGroupsRequest = {
  // IambackofficeSearchGroupsRequest
  body: {
    tenantId: "tenantId_example",
    filters: {
      data: {
        "key": "key_example",
      },
    },
    filtersMask: "filtersMask_example",
  },
};

apiInstance.iamBackofficeSearchGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeSearchGroupsRequest**|  |


### Return type

**IambackofficeSearchGroupsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **iamBackofficeUnassignRoles**
> IambackofficeUnassignRolesResponse iamBackofficeUnassignRoles(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IamBackofficeApi(configuration);

let body:.IamBackofficeApiIamBackofficeUnassignRolesRequest = {
  // IambackofficeUnassignRolesRequest
  body: {
    loginId: "loginId_example",
    tenantId: "tenantId_example",
    roleCodes: [
      "roleCodes_example",
    ],
  },
};

apiInstance.iamBackofficeUnassignRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IambackofficeUnassignRolesRequest**|  |


### Return type

**IambackofficeUnassignRolesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


