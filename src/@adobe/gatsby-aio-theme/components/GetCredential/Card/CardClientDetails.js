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

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 32px;
      `}>
      <h4 className="spectrum-Heading spectrum-Heading--sizeS">{clientDetails?.heading}</h4>

      {clientDetails.children.map((element) => {
        switch (element?.type?.name) {
          case "CardAllowedOrigins":
            return (
              <CardAllowedOrigins
              cardClientDetails={clientDetails}
              cardAllowedOrigins={allowedOrigins}
              allowedOrigins={allowedOriginsDetails}
            />
            );
          case "CardOrganizationName":
            return (
              <CardOrganizationName
                cardClientDetails={clientDetails}
                cardOrganizationName={organizationDetails}
                organization={organizationName?.name}
             />
            );
          case "CardImsOrgID":
            return (
              <CardImsOrgID cardClientDetails={clientDetails}  cardImsOrgID={imsOrgID} imsOrgId={selectedOrganization?.code} />
            );
          case "CardAPIKey":
            return (
              <CardAPIKey
               cardClientDetails={clientDetails}
               cardAPIKey={apiKeyDetails}
               apiKey={response?.['apiKey']}
             />
            );
          case "CardClientId":
            return (
              <CardClientId
               cardClientDetails={clientDetails}
               cardClientId={clientIdDetails}
               clientId={response?.['apiKey']}
             />
            );
          case "CardClientSecret":
            return (
              <CardClientSecret
              cardClientDetails={clientDetails}
              cardClientSecret={clientSecretDetails}
              response={response}
            />
            );
          case "CardScopes":
            return (
              <CardScopes cardClientDetails={clientDetails} cardScopes={scopesDetails} />
            );
          default:
            return null;
         }
      })}
    </div>
  );
};

export { CardClientDetails };
