import { createSignal, For, onMount } from "solid-js";
import { A } from "@solidjs/router";

export default function Index() {
  const [dinosaurs, setDinosaurs] = createSignal([]);

  onMount(async () => {
    try {
      const response = await fetch("/api/dinosaurs");
      const allDinosaurs = await response.json();
      setDinosaurs(allDinosaurs);
      //console.log("Fetched dinosaurs:", allDinosaurs);
    } catch (error) {
      console.error("Failed to fetch dinosaurs:", error);
    }
  });

  return (
    <main>
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <ul class="dino-list">
        <For each={dinosaurs()}>
          {(dinosaur) => (
            <li class="dino-item">
              <A href={`/${dinosaur.name.toLowerCase()}`} class="dinosaur">
                {dinosaur.name}
              </A>
            </li>
          )}
        </For>
      </ul>
    </main>
  );
}
