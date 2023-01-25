import constants from "../Utils/constants";
import isEmpty from "../Utils/isEmpty";
import _ from 'lodash';

const initialState = {
 isAuthenticated: false,
 currentUser: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVING_USER_CREDENTIALS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case constants.REMOVING_USER_CREDENTIALS:
      return {
        ...state,
        user: {},
        currentUser:{},
        isAuthenticated: false,
      };
    case constants.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case constants.CURRENT_ZIPCODE:
      return {
        ...state,
        Zip: action.payload,
      };
    case constants.IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    case constants.VERIFY_OTP_REQUEST:
      return { ...state, isVerifyLoading: true };
    case constants.VERIFY_OTP_SUCCESS:
      return { ...state, isVerifyLoading: false };
    case constants.VERIFY_OTP_FAILURE:
      return { ...state, isVerifyLoading: false };
    case constants.LOGIN_USER_REQUEST:
      return { ...state, isLoginUserLoading: true };
    case constants.LOGIN_USER_SUCCESS:
      return { ...state, isLoginUserLoading: false };
    case constants.LOGIN_USER_FAILURE:
      return { ...state, isLoginUserLoading: false };
      case constants.GET_ALL_USERS_FOR_ADMIN_REQUEST:
      return { ...state, isAllUsersForAdminLoading: true };
    case constants.GET_ALL_USERS_FOR_ADMIN_SUCCESS:
      return { ...state, isAllUsersForAdminLoading: false, allUserForAdmin: action.payload };
    case constants.GET_ALL_USERS_FOR_ADMIN_FAILURE:
      return { ...state, isAllUsersForAdminLoading: false };
    case constants.GET_ALL_USERS_REQUEST:
      return { ...state, isAllUsersLoading: true };
    case constants.GET_ALL_USERS_SUCCESS:
      return { ...state, isAllUsersLoading: false, currentUser:action.payload, isAuthenticated: !(_.isNull(action.payload)) };
    case constants.GET_ALL_USERS_FAILURE:
      return { ...state, isAllUsersLoading: false };
    case constants.GET_USER_BY_ID_REQUEST:
      return { ...state, isGetUserByIdLoading: true };
    case constants.GET_USER_BY_ID_SUCCESS:
      return { ...state, isGetUserByIdLoading: false, user: action.payload };
    case constants.GET_USER_BY_ID_FAILURE:
      return { ...state, isGetUserByIdLoading: false };
    case constants.CREATE_USER_REQUEST:
      return { ...state, isCreateUserLoading: true };
    case constants.CREATE_USER_SUCCESS:
      return { ...state, isCreateUserLoading: false };
    case constants.CREATE_USER_FAILURE:
      return { ...state, isCreateUserLoading: false };
      case constants.CREATE_USER_FOR_ADMIN_REQUEST:
      return { ...state, isCreateUserForAdminLoading: true };
    case constants.CREATE_USER_FOR_ADMIN_SUCCESS:
      return { ...state, isCreateUserForAdminLoading: false };
    case constants.CREATE_USER_FOR_ADMIN_FAILURE:
      return { ...state, isCreateUserForAdminLoading: false };
    case constants.UPDATE_USER_REQUEST:
      return { ...state, isUpdateUserLoading: true };
    case constants.UPDATE_USER_SUCCESS:
      return { ...state, isUpdateUserLoading: false };
    case constants.UPDATE_USER_FAILURE:
      return { ...state, isUpdateUserLoading: false };
    case constants.DELETE_USER_REQUEST:
      return { ...state, isDeleteUserLoading: true };
    case constants.DELETE_USER_SUCCESS:
      return { ...state, isDeleteUserLoading: false };
    case constants.DELETE_USER_FAILURE:
      return { ...state, isDeleteUserLoading: false };
    case 'RESET_APP':
      return { ...initialState}
    default:
      return state;
  }
};

export default authReducer;
