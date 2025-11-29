import { createSignal, For, onMount } from "solid-js";

export default function Operations() {
  const [operations, setOperations] = createSignal([]);

  onMount(async () => {
    try {
      const response = await fetch("http://127.0.0.1/api/hs/v1/operations");
      const operationsList = await response.json();
      setOperations(operationsList);
    } catch (error) {
      console.error("Failed to fetch operations:", error);
    }
  });

  return (
    <main>
      <h1>List of operations</h1>
      <ul class="operation-list">
        <For each={operations()}>
          {(operation) => (
            <li class="dino-item">
              {operation.operation}
            </li>
          )}
        </For>
      </ul>
    </main>
  );
}
