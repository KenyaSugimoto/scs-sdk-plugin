NDSummary.OnToolTipsLoaded("CSharpClass:SCSSdkClient.SharedMemory",{527:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype527\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">SCSSdkClient.</span>&#8203;SharedMemory</div></div></div><div class=\"TTSummary\">Manage the shared memory</div></div>",528:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype528\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private const uint</span> defaultMapSize</div><div class=\"TTSummary\">size of the shared memory in bytes</div></div>",529:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype529\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private readonly</span> SCSSdkConvert _sdkconvert</div><div class=\"TTSummary\">holds the byte to object convert class</div></div>",531:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype531\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> MemoryMappedFile _memoryMappedHandle</div><div class=\"TTSummary\">memory mapped file</div></div>",544:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype544\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> MemoryMappedViewAccessor _memoryMappedView</div><div class=\"TTSummary\">memory mapped view accessor</div></div>",605:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype605\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> Hooked { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div><div class=\"TTSummary\">Could we create a memory view on the memory map</div></div>",606:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype606\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Exception HookException { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div><div class=\"TTSummary\">if we can\'t create a memory view hold the exception</div></div>",607:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype607\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public byte</span>[] RawData { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div><div class=\"TTSummary\">raw byte data of the memory map</div></div>",608:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype608\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Connect(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">map</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">create/connect to a shared memory file</div></div>",609:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype609\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Connect(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">map,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint</span>&nbsp;</td><td class=\"PName last\">mapSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">create/connect to a shared memory file</div></div>",610:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype610\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> Disconnect()</div><div class=\"TTSummary\">close the memory view and handle</div></div>",611:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype611\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> SCSTelemetry Update&lt;T&gt;()</div><div class=\"TTSummary\">read data from memory and update object</div></div>",612:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype612\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> Update()</div><div class=\"TTSummary\">reread data from memory view</div></div>",295:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype295\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected</span> SCSTelemetry ToObject&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">byte</span>[]&nbsp;</td><td class=\"PName last\">structureDataBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Cast a set of bytes to a managed C# object.</div></div>"});