import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "beep",
    description: "Replies with Boop!",
  },
  {
    name: "server",
    description: "Replies with server info!",
  },
  {
    name: "user",
    description: "Replies with user info!",
  },
];
const rest = new REST({ version: "10" }).setToken(
  "MTQxNDA5Mzg1Mjg4ODc5NzI5OQ.GW7qwA.l5ES3KNyV_lovXDgJy9qldOHfAEixmjvSf5er8"
);
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1414093852888797299"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
