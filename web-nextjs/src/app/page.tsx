import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Github, Heart, Upload, Wand2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1>Video IA Transcriber</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground flex items-center">
            Desenvolvido com <Heart className="w-4 h-4 mx-2" color="red" /> no
            nlw da Rockeseat
          </span>
          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA"
            ></Textarea>
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA"
            ></Textarea>
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{" "}
            <code className="text-violet-400">{"transcription"}</code> no seu
            prompt para adicionar o conteúdo de transcrição do vídeo selecionado
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6" action="">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-red-50"
            >
              Selecione um video
            </label>

            <Separator />

            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <div className="space-y-2">
              <label htmlFor="transcription_prompt"></label>
              <Textarea
                id="transcription_prompt"
                className="min-h-20 leading-relaxed"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula(,)"
              ></Textarea>

              <Button type="submit" className="w-full">
                Carregar vídeo
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>

          <form action="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">Título de Youtube</SelectItem>
                  <SelectItem value="gpt3.5">Descrição do Youtube </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger className="">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-tubo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                você poderá customizar essa opção em breve
              </span>
            </div>
          </form>

          <Separator />

          <div className="space-y-4">
            <Label>Temperatura</Label>

            <Slider min={0} max={1} step={0.1} />

            <span className="block text-xs text-muted-foreground italic leading-relaxed">
              Valores mais altos tendem a deixar o resultado mais criativos e
              com possiveis erros
            </span>
          </div>

          <Separator />

          <Button type="submit" className="w-full">
            Executar
            <Wand2 className="w-4 h-4 ml-2" />
          </Button>
        </aside>
      </main>
    </div>
  );
}
