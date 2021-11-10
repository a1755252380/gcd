<template>
  <div class="llqbody">
    <div class="window">
      <div class="terminal">
        <p class="command">git clone https://github.com/schacon/ticgit</p>
        <p class="log">
          <span>
            Cloning into 'ticgit'...<br />
            remote: Reusing existing pack: 1857, done.<br />
            remote: Total 1857 (delta 0), reused 0 (delta 0)<br />
            Receiving objects: 100% (1857/1857), 374.35 KiB | 268.00 KiB/s, done.<br />
            Resolving deltas: 100% (772/772), done.<br />
            Checking connectivity... done.
          </span><br>
          <br>
          <span> $ rm -rf ticgit</span><br>
          <br>
          <span>
            WAIT Compiling...<br>
            <br>
            下午8:21:06<br>
            <br>
            40% building 0/1 modules 1 active ...cd\node_modules\vue-loader\lib\index.js<br />
            ??vue-loader-options!C:\Users\Administrator\Desktop\gcd\node_modules\eslint-loader\index.js<br />
            ??ref--13-0!C:\Users\Administrato40% building 1/2 modules 1 active ...f--0-0!<br />
            C:\Users\Administrator\Desktop\gcd\node_modules\vue-loader\lib\index.js<br />
            ??vue-loader-options!C:\Users\Administrator\Desktop\gcd\src\views\work\llq.vue?<br />
            vue&ty40% building 1/3 modules 2 active ...er\dist\cjs.js??ref--0-0!<br />
            C:\Users\Administrator\Desktop\gcd\node_modules\vue-loader\lib\index.js??<br />
            vue-loader-options!C:\Users\Administrator\Desktop\gcd\src\views\w<br />
            40% building 1/4 modules 3 active ...\Administrator\Desktop\gcd\node_modules\<br />
            vue-loader\lib\index.js??vue-loader-options!C:\Users\Administrator\Desktop\gcd\src\views\work\llq.vue<br />
            ?vue&type=style&index=40% building 2/4 modules 2 active ...\Administrator\Desktop\gcd\node_modules\vue-loader<br />
            \lib\index.js??vue-loader-options!C:\Users\Administrator\Desktop\gcd\src\views\work\llq.vue?vue&type=style&<br />
            index=54% building 3/4 modules 1 active ...\Administrator\Desktop\gcd\node_modules\vue-loader\lib\index.js??<br />
            vue-loader-options!C:\Users\Administrator\Desktop\gcd\src\views\work\llq.vue?vue&type=style&index=98% after emitting CopyPlugin
          </span><br>
          <br>
          <span> $ npm run serve</span> <br>
          <br>
          App running at:<br>
          - Local: http://localhost:8080/<br>
          - Network: http://10.10.83.166:8080/<br>

        </p>

      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.llqbody {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.window {
  border-radius: 3px;
  background: #222;
  color: #fff;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  height: 80%;
  width: 30%;
  min-width: 300px;
}
.window:before {
  content: " ";
  display: block;
  height: 48px;
  background: #c6c6c6;
}
.window:after {
  content: ". . .";
  position: absolute;
  left: 12px;
  right: 0;
  top: -3px;
  font-family: "Times New Roman", Times, serif;
  font-size: 96px;
  color: #fff;
  line-height: 0;
  letter-spacing: -12px;
}

.terminal {
  margin: 20px;
  font-family: monospace;
  font-size: 16px;
  color: #22da26;
}
.terminal .command {
  width: 0%;
  white-space: nowrap;
  overflow: hidden;
  animation: write-command 5s both;
}
.terminal .command:before {
  content: "$ ";
  color: #22da26;
}
.terminal .log {
  white-space: nowrap;
  overflow: hidden;
  animation: write-log 7s both;
}

.terminal p:nth-child(2) {
  animation-delay: 2s;
}
.terminal p:nth-child(3) {
  animation-delay: 8s;
}

@keyframes write-command {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes write-log {
  0% {
    height: 0;
  }
  16% {
    height: 0;
  }
  17% {
    height: 18px;
  }
  33% {
    height: 18px;
  }
  34% {
    height: 37px;
  }
  51% {
    height: 37px;
  }
  52% {
    height: 55px;
  }
  69% {
    height: 74px;
  }
  70% {
    height: 92px;
  }
  87% {
    height: 110px;
  }
  88% {
    height: 128px;
  }
  88% {
    height: 136px;
  }
  99% {
    height: 550px;
  }
  100% {
    height: 600px;
  }
}
</style>