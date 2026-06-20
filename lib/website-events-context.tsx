'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { useWebsiteEvents, type UseWebsiteEventsOptions } from './use-website-events';
import type { WebsiteEvent } from './event-types';

type WebsiteEventsContextValue = {
  events: WebsiteEvent[];
  loaded: boolean;
};

const WebsiteEventsContext = createContext<WebsiteEventsContextValue | null>(null);

type WebsiteEventsProviderProps = UseWebsiteEventsOptions & {
  children: ReactNode;
};

export function WebsiteEventsProvider({ children, ...options }: WebsiteEventsProviderProps) {
  const value = useWebsiteEvents(options);
  return (
    <WebsiteEventsContext.Provider value={value}>{children}</WebsiteEventsContext.Provider>
  );
}

export function useSharedWebsiteEvents(fallbackOptions: UseWebsiteEventsOptions) {
  const shared = useContext(WebsiteEventsContext);
  const own = useWebsiteEvents(fallbackOptions);
  return shared ?? own;
}
