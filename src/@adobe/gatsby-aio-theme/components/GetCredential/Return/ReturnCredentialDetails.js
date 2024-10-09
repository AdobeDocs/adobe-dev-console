import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { ReturnAPIKey } from './ReturnAPIKey';
import { ReturnAllowedOrigins } from './ReturnAllowedOrigins';
import { ReturnClientId } from './ReturnClientId';
import { ReturnClientSecret } from './ReturnClientSecret';
import { ReturnOrganizationName } from './ReturnOrganizationName';
import { ReturnScopes } from './ReturnScopes';
import GetCredentialContext from '../GetCredentialContext';
import { CardImsOrgID } from '../Card/CardImsOrgID';

const ReturnCredentialDetails = ({
  clientDetails,
  clientIdDetails,
  clientSecretDetails,
  organizationDetails,
  scopesDetails,
  apiKeyDetails,
  allowedOriginsDetails,
  organizationName,
  allowedOrigins,
  response,
  imsOrgID
}) => {

  const { selectedOrganization } = useContext(GetCredentialContext);

  const componentsMap = {
    APIKey: <ReturnAPIKey returnCredentialDetails={clientDetails} returnAPIKey={apiKeyDetails} apiKey={response?.workspaces[0]?.credentials[0]?.clientId} />,
    AllowedOrigins: <ReturnAllowedOrigins returnCredentialDetails={clientDetails} allowedOrigins={allowedOriginsDetails} returnAllowedOrigins={allowedOrigins} />,
    ImsOrgID: <CardImsOrgID returnCredentialDetails={clientDetails} cardImsOrgID={imsOrgID} imsOrgId={selectedOrganization?.code} />,
    OrganizationName: <ReturnOrganizationName returnCredentialDetails={clientDetails} returnOrganizationName={organizationDetails} organization={organizationName?.name} />,
    ClientId: <ReturnClientId returnCredentialDetails={clientDetails} returnClientId={clientIdDetails} clientId={response?.workspaces[0]?.credentials[0]?.clientId} />,
    ClientSecret: <ReturnClientSecret returnCredentialDetails={clientDetails} returnClientSecret={clientSecretDetails} response={response} />,
    Scopes: <ReturnScopes returnCredentialDetails={clientDetails} returnScopes={scopesDetails} />
  };

  const splitedOrderBy = clientDetails?.orderBy?.split(',') || [];
  const orderedComponents = splitedOrderBy.length > 0
    ? splitedOrderBy.map(key => componentsMap[key])
    : Object.values(componentsMap);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 32px;
      `}
    >
      <h4 className="spectrum-Heading spectrum-Heading--sizeS">{clientDetails?.heading}</h4>
      {orderedComponents}
    </div>
  );
};

export { ReturnCredentialDetails };
