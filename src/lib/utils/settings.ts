import { invoke } from "@tauri-apps/api";
import { emit } from "@tauri-apps/api/event";
import { register, unregisterAll } from "@tauri-apps/api/globalShortcut";
import { writable } from "svelte/store";

export const defaultSettings = {
    general: {
        showNames: true,
        showGearScore: true,
        showEsther: true,
        accentColor: "theme-pink",
        rawSocket: false,
        port: 6040,
        blur: true
    },
    shortcuts: {
        hideMeter: {
            modifier: "Ctrl",
            key: "ArrowDown"
        },
        showLogs: {
            modifier: "Ctrl",
            key: "ArrowUp"
        },
        showLatestEncounter: {
            modifier: "Ctrl",
            key: "ArrowRight"
        },
        resetSession: {
            modifier: "",
            key: ""
        },
        pauseSession: {
            modifier: "",
            key: ""
        }
    },
    meter: {
        bossHp: true,
        splitBossHpBar: false,
        abbreviateHeader: true,
        showClassColors: true,
        damage: false,
        dps: true,
        damagePercent: true,
        deathTime: false,
        critRate: true,
        frontAtk: true,
        backAtk: true,
        counters: false,
        percentBuffBySup: false,
        percentBrand: false,
        breakdown: {
            damage: true,
            dps: true,
            damagePercent: true,
            critRate: true,
            frontAtk: true,
            backAtk: true,
            avgDamage: false,
            maxDamage: false,
            casts: true,
            cpm: true,
            hits: false,
            hpm: false,
            percentBuffBySup: false,
            percentBrand: false
        }
    },
    logs: {
        abbreviateHeader: false,
        damage: true,
        dps: true,
        damagePercent: true,
        deathTime: true,
        critRate: true,
        frontAtk: true,
        backAtk: true,
        counters: false,
        minEncounterDuration: 30,
        percentBuffBySup: false,
        percentBrand: false,
        breakdown: {
            damage: true,
            dps: true,
            damagePercent: true,
            critRate: true,
            frontAtk: true,
            backAtk: true,
            avgDamage: false,
            maxDamage: false,
            casts: true,
            cpm: true,
            hits: false,
            hpm: false,
            percentBuffBySup: false,
            percentBrand: false
        }
    }
};

const settingsStore = (key: string, defaultSettings: object) => {
    const storedSettings = localStorage.getItem(key);
    const value = storedSettings ? JSON.parse(storedSettings) : defaultSettings;
    const store = writable(value);
    if (typeof window !== "undefined") {
        window.addEventListener("storage", (event) => {
            if (event.key === key) {
                const newValue = JSON.parse(event.newValue || "");
                store.set(newValue);
            }
        });
    }
    return {
        subscribe: store.subscribe,
        set: (value: object) => {
            localStorage.setItem(key, JSON.stringify(value));
            if (key === "settings") {
                invoke("save_settings", { settings: value });
            }
            store.set(value);
        },
        update: store.update
    };
};

export const settings = settingsStore("settings", defaultSettings);

export async function registerShortcuts(shortcuts: any) {
    await unregisterAll();

    if (shortcuts.hideMeter.modifier && shortcuts.hideMeter.key) {
        await register(shortcuts.hideMeter.modifier + "+" + shortcuts.hideMeter.key, async () => {
            await invoke("toggle_meter_window");
        });
    }
    if (shortcuts.showLogs.modifier && shortcuts.showLogs.key) {
        await register(shortcuts.showLogs.modifier + "+" + shortcuts.showLogs.key, async () => {
            await invoke("open_url", { url: "logs" });
        });
    }
    if (shortcuts.showLatestEncounter.modifier && shortcuts.showLatestEncounter.key) {
        await register(shortcuts.showLatestEncounter.modifier + "+" + shortcuts.showLatestEncounter.key, async () => {
            await invoke("open_most_recent_encounter");
        });
    }
    if (shortcuts.resetSession.modifier && shortcuts.resetSession.key) {
        await register(shortcuts.resetSession.modifier + "+" + shortcuts.resetSession.key, async () => {
            await emit("reset-request");
        });
    }
    if (shortcuts.pauseSession.modifier && shortcuts.pauseSession.key) {
        await register(shortcuts.pauseSession.modifier + "+" + shortcuts.pauseSession.key, async () => {
            await emit("pause-request");
        });
    }
}

export const skillIcon = settingsStore("skillIcon", {});
export const classIconCache = settingsStore("classIconCache", {});
