import { Client, Events, GatewayIntentBits, Message } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hi from bot",
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const { commandName } = interaction;
  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "beep") {
    await interaction.reply("Boop!");
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === "user") {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    );
  }
});

client.login(
  "MTQxNDA5Mzg1Mjg4ODc5NzI5OQ.GW7qwA.l5ES3KNyV_lovXDgJy9qldOHfAEixmjvSf5er8"
);
