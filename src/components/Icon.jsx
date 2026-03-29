import { Icon as IconifyIcon } from '@iconify/react'

/**
 * Thin wrapper around @iconify/react – accepts any Iconify icon ID string.
 * Examples: 'lucide:zap', 'mdi:factory', 'mdi:handshake'
 */
const Icon = ({ name, size = 24, className = '' }) => (
  <IconifyIcon icon={name} width={size} height={size} className={className} />
)

export default Icon
