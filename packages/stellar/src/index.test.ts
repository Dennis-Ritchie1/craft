import { describe, it, expect } from 'vitest';
import * as barrel from './index';

describe('@craft/stellar public barrel', () => {
    it('exports abi-binding-generator', () => {
        expect(typeof barrel.parseAbi).toBe('function');
        expect(typeof barrel.generateBinding).toBe('function');
    });

    it('exports asset-auth', () => {
        expect(typeof barrel.validateAuthorizationFlags).toBe('function');
        expect(barrel.AUTH_REQUIRED_FLAG).toBe(1);
    });

    it('exports contract-state-snapshot', () => {
        expect(typeof barrel.ContractStateSnapshotService).toBe('function');
        expect(barrel.SNAPSHOT_DB_TABLE).toBe('contract_snapshots');
    });

    it('exports upgrade-orchestrator', () => {
        expect(typeof barrel.diffAbiSchemas).toBe('function');
        expect(typeof barrel.orchestrateContractUpgrade).toBe('function');
    });
});
