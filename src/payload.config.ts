import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { ContactSubmissions } from './collections/ContactSubmissions'

export default buildConfig({
  admin: { user: Users.slug },
  collections: [Users, ContactSubmissions],
  editor: lexicalEditor(),
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI || '' } }),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: { outputFile: './src/payload-types.ts' },
})
