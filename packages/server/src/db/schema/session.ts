import { z } from "zod";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";

export const sessions = pgTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at").notNull(),
});
