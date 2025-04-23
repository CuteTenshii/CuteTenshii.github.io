'use client';

import React, { useEffect, useState } from 'react';
import { Music } from 'lucide-react';
import { SiGoland, SiPhpstorm, SiWebstorm } from '@icons-pack/react-simple-icons';

export default function DiscordStatus() {
  const [status, setStatus] = useState<DiscordStatusData['data']|null>(null);

  const fetchActivity = () => {
    fetch('https://api.lanyard.rest/v1/users/269415459735076864')
      .then((res) => res.json())
      .then((data: DiscordStatusData) => {
        if (data.success) setStatus(data.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchActivity();
    
    const interval = setInterval(() => fetchActivity(), 30000);
    return () => clearInterval(interval);
  }, []);
  const getIcon = (type: number, name: string) => {
    if (!name) return null;
    if (name === 'WebStorm') return SiWebstorm;
    if (name === 'PhpStorm') return SiPhpstorm;
    if (name === 'GoLand') return SiGoland;
    if (type === 2) return Music;
  };
  const getState = (activity?: DiscordActivity) => {
    if (!activity) return null;
    if (activity.name === 'WebStorm' || activity.name === 'PhpStorm' || activity.name === 'GoLand') {
      return activity.state ? `${activity.state} in ${activity.details}` : `In ${activity.name}`;
    }
    if (activity.type === 2) return <>Listening to {activity.state} - {activity.details}</>;
  };
  const activity = status?.activities?.find(activity => activity.type !== 4);
  const Icon = getIcon(activity?.type || 0, activity?.name || '') || React.Fragment;

  return activity && (
    <div className="lg:w-[32rem] w-full px-5 text-sm text-gray-500 flex justify-center items-center gap-3 text-left">
      <div className="size-7"><Icon size={28} /></div>
      <div>{getState(activity)}</div>
    </div>
  );
}

interface DiscordActivity {
  name: string;
  type: number;
  state: string;
  details: string;
}

interface DiscordStatusData {
  success: boolean;
  data: {
    activities: DiscordActivity[];
  };
}