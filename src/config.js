import configJson from "./auth_config.json"

const audience =
    configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
        ? configJson.audience
        : null;

export function getConfig() {
    return {
        domain: configJson.domain,
        clientId: configJson.clientId,
        ...(audience ? {audience}:null)
    }
}