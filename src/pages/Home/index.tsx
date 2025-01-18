import { Play } from "phosphor-react";

import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  TaskInput,
  MinutesAmountInput,
  StartCountdownButton,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            list="task-suggestions"
            id="task"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist>
            <option value="1"></option>
            <option value="1"></option>
            <option value="1"></option>
            <option value="1"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
