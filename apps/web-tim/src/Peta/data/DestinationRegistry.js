import { ArmyDock } from "./ArmyDock";
import { PasirTimbulDodola } from "./PasirTimbulDodola";
import { DodolaKecil } from "./DodolaKecil";
import { DesaYayasan } from "./DesaYayasan";
import { DesaKolorai } from "./DesaKolorai";

export const ALL_DESTINATION_CLASSES = [
    ArmyDock,
    PasirTimbulDodola,
    DodolaKecil,
    DesaYayasan,
    DesaKolorai
];

export function getDestinationClassById(id) {
    if (!id) return null;
    const targetId = id.toString().toLowerCase();
    return ALL_DESTINATION_CLASSES.find(cls => cls.id.toLowerCase() === targetId) || null;
}
