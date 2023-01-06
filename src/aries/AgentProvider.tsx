import Provider from '@aries-framework/react-hooks';
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Agent,
  AutoAcceptCredential,
  AutoAcceptProof,
  HttpOutboundTransport,
  InitConfig,
  WsOutboundTransport,
} from '@aries-framework/core';
import {agentDependencies} from '@aries-framework/react-native';

export default function AgentProvider({children}: any) {
  const [agentInitialized, setAgentInitialized] = useState<Agent | undefined>(undefined);

  const initConfig = (genesis: string) => {
    const config: InitConfig = {
      label: 'aries-mobile-12352',
      walletConfig: {
        id: 'aries-wallet-12352',
        key: 'secret00000000000000000000001',
      },
      indyLedgers: [
        {
          id: 'schat-ledger-644352',
          isProduction: false,
          genesisTransactions: genesis,
        },
      ],
      autoAcceptConnections: true,
      autoAcceptCredentials: AutoAcceptCredential.ContentApproved,
      autoAcceptProofs: AutoAcceptProof.ContentApproved,
      mediatorConnectionsInvite:
        'ws://mediation.popu.online?c_i=eyJAdHlwZSI6ICJkaWQ6c292OkJ6Q2JzTlloTXJqSGlxWkRUVUFTSGc7c3BlYy9jb25uZWN0aW9ucy8xLjAvaW52aXRhdGlvbiIsICJAaWQiOiAiNTg5N2YxMDItYzlmZS00NjM4LThhMzgtMjBmZDYxNjM0MWZlIiwgImxhYmVsIjogIk1lZGlhdGlvbiIsICJyZWNpcGllbnRLZXlzIjogWyI5Mnk4djFlV1JXUUxNNkVSelJHR1hxZFluU3RFUkRoMnlNcEphYnJVaHpzciJdLCAic2VydmljZUVuZHBvaW50IjogIndzOi8vbWVkaWF0aW9uLnBvcHUub25saW5lIn0=',
      mediatorPollingInterval: 10000,
    };

    return config;
  };

  const initializeAgent = async () => {
    const genesisRes = await fetch('http://greenlight.bcovrin.vonx.io/genesis');
    const genesis = await genesisRes.text();
    const config = initConfig(genesis);
    const agent = new Agent(config, agentDependencies);
    agent.registerOutboundTransport(new HttpOutboundTransport());
    agent.registerOutboundTransport(new WsOutboundTransport());
    await agent.initialize();
    setAgentInitialized(agent);
  };

  useEffect(() => {
    initializeAgent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Provider agent={agentInitialized}>{children}</Provider>;
}
