export interface SidebarItem {
    title: string;
    children?: string[];
  }
  

  export const SIDEBAR_DATA: SidebarItem[] = [
    {
      title: 'Nodes',
      children: [
        'All Nodes',
        'Nodes without a plan',
        'vcenter/ESX Groups',
        'Plan Groups',
        'Linux Backup Server Groups',
        'Oracle Database Server Groups'
      ]
    },
    {
      title: 'Plans',
      children: [
        'All Plans'
      ]
    },
    {
      title: 'Destination',
      children: [
        'Recovery Point Servers',
        'Arcserve Backup Servers',
        'Shared Folders',
        'Cloud Accounts',
        'Remote Consoles',
        'Arcserve Cloud'
      ]
    },
    {
      title: 'Infrastructure',
      children: [
        'Storage Arrays',
        'Instant Virtual Machines',
        'Sites'
      ]
    }
  ];
  