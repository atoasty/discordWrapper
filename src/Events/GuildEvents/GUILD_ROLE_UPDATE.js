class GUILD_ROLE_UPDATE {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {Object} packet The packet of the event.
   */
  async handle(packet) {
    this.client.eventHandler.emitEvent("RoleUpdated", packet);
  }
}

module.exports = GUILD_ROLE_UPDATE;
