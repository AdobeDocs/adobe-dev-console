import React, { useContext } from 'react';
import { css } from "@emotion/react";
import { CardAPIKey } from './CardAPIKey';
import { CardClientId } from './CardClientId';
import { CardAllowedOrigins } from './CardAllowedOrigins';
import { CardClientSecret } from './CardClientSecret';
import { CardOrganizationName } from './CardOrganizationName';
import { CardScopes } from './CardScopes';
import { CardImsOrgID } from './CardImsOrgID';
import GetCredentialContext from '../GetCredentialContext';

const CardClientDetails = ({
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
  imsOrgID,
}) => {
  const { selectedOrganization } = useContext(GetCredentialContext);

  const componentsMap = {
    APIKey: <CardAPIKey cardClientDetails={clientDetails} cardAPIKey={apiKeyDetails} apiKey={response?.apiKey} />,
    ClientId: <CardClientId cardClientDetails={clientDetails} cardClientId={clientIdDetails} clientId={response?.apiKey} />,
    AllowedOrigins: <CardAllowedOrigins cardClientDetails={clientDetails} cardAllowedOrigins={allowedOrigins} allowedOrigins={allowedOriginsDetails} />,
    ClientSecret: <CardClientSecret cardClientDetails={clientDetails} cardClientSecret={clientSecretDetails} response={response} />,
    OrganizationName: <CardOrganizationName cardClientDetails={clientDetails} cardOrganizationName={organizationDetails} organization={organizationName?.name} />,
    Scopes: <CardScopes cardClientDetails={clientDetails} cardScopes={scopesDetails} />,
    ImsOrgID: <CardImsOrgID cardClientDetails={clientDetails} cardImsOrgID={imsOrgID} imsOrgId={selectedOrganization?.code} />
  };

  const splitedOrderBy = clientDetails?.orderBy?.split(',') || [];
  const orderedComponents = splitedOrderBy.length > 0
    ? splitedOrderBy.map(component => componentsMap[component])
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

export { CardClientDetails };
