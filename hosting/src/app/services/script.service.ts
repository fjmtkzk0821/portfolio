import { Inject, Injectable } from '@angular/core';
import { AppScript, ScriptStore } from '../assets/script.store';
import { DOCUMENT } from '@angular/common';

// declare var document: any;

@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  private scripts: any = {};
  constructor(@Inject(DOCUMENT) private document: Document) {
    ScriptStore.forEach((script: AppScript) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src,
      };
    });
  }

  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((s) => promises.push(this.loadScript(s)));
    return Promise.all(promises);
  }
  loadScript(name: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true });
      } else {
        let script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        script.async = true;
        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve({ script: name, loaded: true });
        };
        script.onerror = (error: any) =>
          resolve({ script: name, loaded: false });
        this.document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}
