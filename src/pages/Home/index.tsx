import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  TaskInput,
  MinutesAmountInput,
  StartCountdownButton,
} from "./styles";
import { useState } from "react";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarega"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

type CycleType = {
  id: string;
  task: string;
  minutesAmount: number;
};

export function Home() {
  const [cycles, setCycles] = useState<CycleType[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const { register, watch, handleSubmit, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle({ task, minutesAmount }: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: CycleType = {
      id,
      task,
      minutesAmount,
    };

    setCycles((prevState) => [...prevState, newCycle]);
    setActiveCycleId(id);
    reset();
  }

  const task = watch("task");
  const isSubmitDisable = !task;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  console.log(activeCycle);

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            list="task-suggestions"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
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
            {...register("minutesAmount", { valueAsNumber: true })}
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

        <StartCountdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
