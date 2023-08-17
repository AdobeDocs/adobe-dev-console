import { GetCredential } from '@adobe/gatsby-theme-aio/src/components/GetCredential';
import React from 'react';

const GetCredentialExternal = ({}) => {
    return (<GetCredential credentialType="apiKey">
    <GetCredential.Side>
    <div>
       <h1> A custom side component </h1>
    </div>
    </GetCredential.Side>
 </GetCredential>)
}

export { GetCredentialExternal };