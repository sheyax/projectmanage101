import React from 'react';
import {getProviders, signIn as signIntoProvider} from "next-auth/react"

//Browser
export default function signIn({providers}) {
  return (
    <div>
    {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

//Middle Server
export async function getServerSideProps(){
    const providers = await getProviders();

    return{
        props:{
            providers
        }
    }
}
