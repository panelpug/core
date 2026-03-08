import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Events,
  Interaction,
} from 'discord.js';
import { client } from '../client';
import { config } from '../config';
import { getOpenSession, insertProposal } from '../voting/session';

export const proposeCommand = new SlashCommandBuilder()
  .setName('propose')
  .setDescription('Submit a plan proposal for voting')
  .addStringOption((option) =>
    option
      .setName('plan')
      .setDescription('Describe the plan')
      .setRequired(true)
      .setMaxLength(1000),
  );

async function handlePropose(interaction: ChatInputCommandInteraction): Promise<void> {
  const channel = interaction.channel;
  if (!channel || !channel.isThread()) {
    await interaction.reply({
      content: 'This command can only be used inside a forum thread.',
      ephemeral: true,
    });
    return;
  }

  const session = getOpenSession(channel.id);
  if (!session) {
    await interaction.reply({
      content: 'There is no active voting session in this thread.',
      ephemeral: true,
    });
    return;
  }

  const description = interaction.options.getString('plan', true);

  await interaction.deferReply();

  const reply = await interaction.editReply(
    `**Plan proposed by <@${interaction.user.id}>:**\n> ${description}`,
  );

  await reply.react(config.proposalEmoji).catch(console.error);

  insertProposal(channel.id, reply.id, interaction.user.id, description);
}

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName !== 'propose') return;
  await handlePropose(interaction).catch(console.error);
});
