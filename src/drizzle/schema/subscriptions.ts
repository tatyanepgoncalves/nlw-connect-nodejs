import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subcriptions', {
  id: uuid().primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
