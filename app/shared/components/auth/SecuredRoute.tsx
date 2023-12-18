/* eslint-disable react/jsx-props-no-spreading */
import React,{ FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { ComponentEtaReduxState, EtaUser } from '..';
import { AuthenticationService } from './AuthenticationService';
import { UserRole } from './EnumRole';

export interface SecuredRouteProps extends RouteProps{
    requiredRoles?: UserRole[];
    profileCondtion?: (user: EtaUser|undefined) => boolean;

};

export const mapStateToProps = (state: ComponentEtaReduxState) => ({
    authenticatedUser: state.authentication.user
  });

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
  
const SecuredRoute: FC<SecuredRouteProps & PropsFromRedux> = (props: SecuredRouteProps & PropsFromRedux) =>{
    
    const {requiredRoles, authenticatedUser,render,profileCondtion} = props;
    const useRoles = AuthenticationService.getUserRoles(authenticatedUser);

    const isAllowedByRoles = (requiredRoles && requiredRoles.length > 0) ? (requiredRoles.filter((value: UserRole) => useRoles.includes(value)).length >
    0 || requiredRoles.indexOf(UserRole.All) !== -1 || requiredRoles.indexOf(UserRole.None) !== -1 ) : true;
    const isAllowedByProfileCondition = profileCondtion ? profileCondtion(authenticatedUser) : true;
    return (
        <>
        <Route {...props} render={(authenticatedUser && isAllowedByRoles && isAllowedByProfileCondition) ? render : (() =>{
        return (
            <>
                <Redirect to='/error/403'/>
            </>
            );
        }
        )}/>
        </>
    );
};
export default connector(SecuredRoute);
