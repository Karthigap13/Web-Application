export const TABLE_COLUMNS_CONFIG: { [key: string]: { header: string, key: string }[] } = {
    'Oracle Database Server Groups': [
      { header: 'Select', key: 'select' },
      { header: 'Status', key: 'status' },
      { header: 'Node Name', key: 'nodeName' },
      { header: 'VM Name', key: 'vmName' },
      { header: 'Plan', key: 'plan' },
      { header: 'Hypervisor', key: 'hypervisor' },
      { header: 'Last Backup Result', key: 'lastBackupResult' },
      { header: 'Last Backup Time', key: 'lastBackupTime' }
    ],
    'All Nodes': [
      { header: 'Select', key: 'select' },
      { header: 'Name', key: 'name' },
      { header: 'IP', key: 'ip' },
      { header: 'Location', key: 'location' },
      { header: 'Status', key: 'status' },
      { header: 'Last Backup', key: 'lastBackup' }
    ],
    'Nodes without a plan': [
      { header: 'Select', key: 'select' },
      { header: 'Name', key: 'name' },
      { header: 'IP', key: 'ip' },
      { header: 'OS', key: 'os' },
      { header: 'Last Active', key: 'lastActive' },
      { header: 'Status', key: 'status' }
    ],
    'vcenter/ESX Groups': [
      { header: 'Select', key: 'select' },
      { header: 'Group Name', key: 'groupName' },
      { header: 'Hosts', key: 'hosts' },
      { header: 'Status', key: 'status' }
    ],
    'Plan Groups': [
      { header: 'Select', key: 'select' },
      { header: 'Plan Name', key: 'planName' },
      { header: 'Type', key: 'type' },
      { header: 'Last Run', key: 'lastRun' }
    ],
    'Linux Backup Server Groups': [
      { header: 'Select', key: 'select' },
      { header: 'Server Name', key: 'serverName' },
      { header: 'OS', key: 'os' },
      { header: 'Status', key: 'status' }
    ],
    'All Plans': [
      { header: 'Select', key: 'select' },
      { header: 'Plan Name', key: 'planName' },
      { header: 'Type', key: 'type' },
      { header: 'Status', key: 'status' }
    ],
    'Recovery Point Servers': [
      { header: 'Select', key: 'select' },
      { header: 'Server Name', key: 'serverName' },
      { header: 'IP', key: 'ip' },
      { header: 'Status', key: 'status' }
    ],
    'Arcserve Backup Servers': [
      { header: 'Select', key: 'select' },
      { header: 'Server Name', key: 'serverName' },
      { header: 'Location', key: 'location' },
      { header: 'Status', key: 'status' }
    ],
    'Shared Folders': [
      { header: 'Select', key: 'select' },
      { header: 'Folder Name', key: 'folderName' },
      { header: 'Path', key: 'path' },
      { header: 'Status', key: 'status' }
    ],
    'Cloud Accounts': [
      { header: 'Select', key: 'select' },
      { header: 'Account Name', key: 'accountName' },
      { header: 'Provider', key: 'provider' },
      { header: 'Status', key: 'status' }
    ],
    'Remote Consoles': [
      { header: 'Select', key: 'select' },
      { header: 'Console Name', key: 'consoleName' },
      { header: 'IP', key: 'ip' },
      { header: 'Status', key: 'status' }
    ],
    'Arcserve Cloud': [
      { header: 'Select', key: 'select' },
      { header: 'Region', key: 'region' },
      { header: 'Storage Used', key: 'storageUsed' },
      { header: 'Status', key: 'status' }
    ],
    'Storage Arrays': [
      { header: 'Select', key: 'select' },
      { header: 'Array Name', key: 'arrayName' },
      { header: 'Capacity', key: 'capacity' },
      { header: 'Used', key: 'used' },
      { header: 'Status', key: 'status' }
    ],
    'Instant Virtual Machines': [
      { header: 'Select', key: 'select' },
      { header: 'VM Name', key: 'vmName' },
      { header: 'Status', key: 'status' }
    ],
    'Sites': [
      { header: 'Select', key: 'select' },
      { header: 'Site Name', key: 'siteName' },
      { header: 'Location', key: 'location' }
    ]
  };
  