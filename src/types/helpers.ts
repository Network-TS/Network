import { Collection, Member, Message, MessageReactionUncachedPayload, ReactionPayload } from "../../deps.ts";
import { GuildSchema } from "../database/schemas.ts";
import {
  CollectMessagesOptions,
  CollectReactionsOptions,
  MessageCollectorOptions,
  ReactionCollectorOptions,
} from "./collectors.ts";

export interface Helpers {
  // Collectors
  needMessage: (memberID: string, channelID: string, options?: MessageCollectorOptions | undefined) => Promise<Message>;
  collectMessages: (options: CollectMessagesOptions) => Promise<Message[]>;
  needReaction: (memberID: string, messageID: string, options?: ReactionCollectorOptions) => Promise<string>;
  collectReactions: (options: CollectReactionsOptions) => Promise<string[]>;
  processReactionCollectors: (
    message: Message | MessageReactionUncachedPayload,
    emoji: ReactionPayload,
    userID: string
  ) => void;

  // Discord Helpers
  isModOrAdmin: (message: Message, settings?: GuildSchema) => boolean;
  isAdmin: (message: Message, settings?: GuildSchema | null) => boolean;
  reactError: (message: Message, vip?: boolean) => Promise<void>;
  reactSuccess: (message: Message) => Promise<void>;
  emojiReaction: (emoji: string) => string;
  emojiID: (emoji: string) => string | undefined;
  emojiUnicode: (emoji: ReactionPayload) => string;
  moveMessageToOtherChannel: (message: Message, channelID: string) => Promise<Message | undefined>;
  fetchMember: (guildID: string, userID: string) => Promise<Member | undefined>;
  fetchMembers: (guildID: string, userIDs: string[]) => Promise<Collection<string, Member> | undefined>;
  memberTag: (message: Message) => string;
}
