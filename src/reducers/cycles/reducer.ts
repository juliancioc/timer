/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draftState) => {
        draftState.cycles.push(action.payload.cycle);
        draftState.activeCycleId = action.payload.cycle.id;
      });

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draftState) => {
        draftState.cycles[currentCycleIndex].interruptedDate = new Date();
        draftState.activeCycleId = null;
      });
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draftState) => {
        draftState.cycles[currentCycleIndex].finishedDate = new Date();
        draftState.activeCycleId = null;
      });
    }

    default:
      return state;
  }
}
