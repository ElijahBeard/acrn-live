import "clsx";
import { w as pop, u as push, y as ensure_array_like } from "../../chunks/index.js";
/* empty css               */
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Cablelogo($$payload, $$props) {
  push();
  $$payload.out += `<div class="logo-header svelte-127mmp3"><div class="animated-cable-logo svelte-127mmp3">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="live svelte-127mmp3">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function Player($$payload, $$props) {
  push();
  let play = `<i class="fa-solid fa-play" style="color:white"></i>`;
  let high_vol = ` <i class="fa-solid fa-volume-high" style="color:white"></i>`;
  let playstatus = play;
  let now_playing = " ";
  $$payload.out += `<div class="player svelte-121mb3o"><button class="play-status svelte-121mb3o"><i class="fa-solid fa-circle svelte-121mb3o"></i> <div class="play-button svelte-121mb3o">${html(playstatus)}</div></button> <div class="now-playing svelte-121mb3o"><div class="marquee svelte-121mb3o"><span class="marquee_content svelte-121mb3o">${html(now_playing)}</span> <span class="marquee_content svelte-121mb3o">${html(now_playing)}</span> <span class="marquee_content svelte-121mb3o">${html(now_playing)}</span> <span class="marquee_content svelte-121mb3o">${html(now_playing)}</span></div></div> <button class="volume-controls svelte-121mb3o">`;
  {
    $$payload.out += "<!--[!-->";
    {
      $$payload.out += "<!--[!-->";
      {
        $$payload.out += "<!--[!-->";
        $$payload.out += `${html(high_vol)}`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></button></div> <audio class="svelte-121mb3o"><source src="https://streamer.radio.co/s319507a6f/listen" type="audio/mpeg" class="svelte-121mb3o"/></audio>`;
  pop();
}
function Radio($$payload, $$props) {
  push();
  let size = 40;
  $$payload.out += `<svg class="svelte-1kwf3q5"><circle${attr("cx", 0)}${attr("cy", 0)}${attr("r", size)} stroke="#FFF"${attr("fill-opacity", 0)} viewBox="0 50 10000 10000"></circle></svg>\`\`\`\`\`\`\`\`\`\`\`\`\`\``;
  pop();
}
function History($$payload, $$props) {
  push();
  let tracks = [];
  function UTCtoEST(utc) {
    const utcdate = new Date(utc);
    const options = {
      timeZone: "America/New_York",
      hour12: true,
      hour: "numeric",
      minute: "numeric"
    };
    const est = utcdate.toLocaleString("en-US", options);
    return `[${est}]`;
  }
  const each_array = ensure_array_like(tracks);
  $$payload.out += `<ul id="songs_list" class="svelte-1nwv64c"><div class="title svelte-1nwv64c"><h1>-- TRACK HISTORY --</h1></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let track = each_array[$$index];
    $$payload.out += `<li>${escape_html(UTCtoEST(track.start_time).padEnd(100))}${escape_html(track.title)}</li>`;
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<div class="player svelte-1pq2qje">`;
  Cablelogo($$payload);
  $$payload.out += `<!----> `;
  Player($$payload);
  $$payload.out += `<!----></div> <div class="radio svelte-1pq2qje">`;
  Radio($$payload);
  $$payload.out += `<!----></div> <div class="radio-body svelte-1pq2qje"><div class="chat svelte-1pq2qje"><script id="cid0020000322445555671" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 100%;height: 100%;">{"handle":"acrnmed","arch":
            "js","styles":{"a":"000000","b":100,"c":"FFFFFF","d":"FFFFFF",
            "k":"292c2f","l":"292c2f","m":"292c2f","n":"FFFFFF","p":"10",
            "q":"000000","r":100,"t":0,"surl":0,"allowpm":0}}
            <\/script><!----></div> <div class="history">`;
  History($$payload);
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};
