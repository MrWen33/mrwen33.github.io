import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as l,a as e,b as i,d,e as r,r as t}from"./app.23357b6d.js";const u={},c=r('<h2 id="\u524D\u7F6E\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6982\u5FF5" aria-hidden="true">#</a> \u524D\u7F6E\u6982\u5FF5</h2><p>DX12\u4E2D\u7684\u8D44\u6E90\u5305\u62ECVertex Buffer, Index Buffer, Constant Buffer, Texture\u7B49\u7B49</p><p>GPU\u7AEF\u7684DX12\u8D44\u6E90\u7684C++\u8868\u793A\u4E3A<code>ID3DResource</code>, \u8868\u793A\u8D44\u6E90\u5806\u4E2D\u7684\u4E00\u6BB5\u5185\u5B58.</p><p>CPU\u7AEF\u7684DX12\u8D44\u6E90C++\u8868\u793A\u4E3A<code>ID3DBlob</code></p><p>Resource State\u4E0EResource Barrier: Resource State\u610F\u601D\u4E3A\u8D44\u6E90\u72B6\u6001\uFF0C\u4E00\u4E9B\u5BF9\u8D44\u6E90\u7684\u64CD\u4F5C\u5728\u67D0\u4E9B\u72B6\u6001\u4E0B\u53EF\u4EE5\u8FDB\u884C\u800C\u5728\u67D0\u4E9B\u72B6\u6001\u4E0B\u4E0D\u884C\u3002Resource Barrier\u7528\u4E8E\u8D44\u6E90\u72B6\u6001\u7684\u8F6C\u6362\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u8D44\u6E90\u7684\u64CD\u4F5C\u4E0E\u5F53\u524D\u72B6\u6001\u4E0D\u7B26. Resource Barrier\u8FDB\u884C\u7684\u8F6C\u6362\u64CD\u4F5C\u5728Command List\u6267\u884C.</p><h2 id="vertex-buffer-index-buffer" tabindex="-1"><a class="header-anchor" href="#vertex-buffer-index-buffer" aria-hidden="true">#</a> Vertex Buffer, Index Buffer</h2><h3 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h3><p>Vertex/Index Buffer\u5F88\u5C11\u6539\u53D8\uFF0C\u6240\u4EE5\u4F7F\u7528Default Heap\u5B58\u50A8\u6570\u636E\uFF0C\u4F7F\u7528Upload Heap\u5C06\u6570\u636E\u4E0A\u4F20\u5230Default Heap\u4E2D</p><p>\u6570\u636E\u6D41\u52A8:</p><p>\u4F7F\u7528<code>CreateCommittedResource</code>\u521B\u5EFA\u9690\u5F0FDefault Heap\u4E0E\u8D44\u6E90</p>',10),o=e("code",null,"CreateCommitResource",-1),v={href:"https://docs.microsoft.com/en-us/windows/win32/api/d3d12/nf-d3d12-id3d12device-createcommittedresource",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>ThrowIfFailed(device-&gt;CreateCommittedResource(
    &amp;CD3DX12_HEAP_PROPERTIES(D3D12_HEAP_TYPE_DEFAULT), // \u5806\u7684\u7C7B\u578B\uFF1ADefault
    D3D12_HEAP_FLAG_NONE,
    &amp;CD3DX12_RESOURCE_DESC::Buffer(byteSize), // \u8D44\u6E90\u7684\u5927\u5C0F
    D3D12_RESOURCE_STATE_COMMON,  // \u521D\u59CB\u72B6\u6001
    nullptr,
    IID_PPV_ARGS(defaultBuffer.GetAddressOf()))); // \u521B\u5EFA\u7684\u8D44\u6E90\uFF0C\u901A\u8FC7\u5F15\u7528\u53C2\u6570\u65B9\u5F0F\u4F20\u5165. defualtBuffer\u7C7B\u578B\u4E3AComPtr&lt;ID3DResource&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u4F7F\u7528<code>CreateComittedResource</code>\u521B\u5EFAUpload Heap</p><div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>ThrowIfFailed(device-&gt;CreateCommittedResource(
    &amp;CD3DX12_HEAP_PROPERTIES(D3D12_HEAP_TYPE_UPLOAD), // \u5806\u7C7B\u578B\uFF1AUpload
    D3D12_HEAP_FLAG_NONE,
    &amp;CD3DX12_RESOURCE_DESC::Buffer(byteSize),
    D3D12_RESOURCE_STATE_GENERIC_READ,
    nullptr,
    IID_PPV_ARGS(uploadBuffer.GetAddressOf())));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u5B8C\u6BD5\u540E\uFF0C\u4F7F\u7528Resource Barrier\u8F6C\u6362\u8D44\u6E90\u72B6\u6001\u5E76\u4F7F\u7528<code>UpdateSubresources</code>\u65B9\u6CD5\u901A\u8FC7Upload Heap\u5C06\u6570\u636E\u4E0A\u4F20\u5230Default Heap.</p><div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>// \u51C6\u5907\u6570\u636E
D3D12_SUBRESOURCE_DATA subResourceData = {};
subResourceData.pData = initData;
subResourceData.RowPitch = byteSize;
subResourceData.SlicePitch = subResourceData.RowPitch;

// \u8F6C\u6362\u72B6\u6001\u4E0A\u4F20\u6570\u636E
cmdList-&gt;ResourceBarrier(1, &amp;CD3DX12_RESOURCE_BARRIER::Transition(defaultBuffer.Get(), 
    D3D12_RESOURCE_STATE_COMMON, D3D12_RESOURCE_STATE_COPY_DEST));
UpdateSubresources&lt;1&gt;(cmdList, defaultBuffer.Get(), uploadBuffer.Get(), 0, 0, 1, &amp;subResourceData);
cmdList-&gt;ResourceBarrier(1, &amp;CD3DX12_RESOURCE_BARRIER::Transition(defaultBuffer.Get(),
    D3D12_RESOURCE_STATE_COPY_DEST, D3D12_RESOURCE_STATE_GENERIC_READ));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u5C06\u6570\u636E\u4E0A\u4F20\u5230Default Heap\u7684\u5DE5\u4F5C</p><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u4F7F\u7528<code>ID3DResource</code>\u521B\u5EFAVertexBufferView(<code>D3D12_VERTEX_BUFFER_VIEW</code>)/IndexBufferView(<code>D3D12_INDEX_BUFFER_VIEW</code>), \u5C06\u5176\u4F7F\u7528Command List\u7684\u65B9\u6CD5<code>IASetVertexBuffers</code>/<code>IASetIndexBuffer</code>\u7ED1\u5B9A\u5373\u53EF\u5728\u4E4B\u540E\u7684<code>DrawIndexedInstanced</code>\u4E2D\u4F7F\u7528\u5BF9\u5E94\u7684VertexBuffer/IndexBuffer</p><div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>// \u521B\u5EFAVertexBufferView, IndexBufferView
D3D12_VERTEX_BUFFER_VIEW vbv;
vbv.BufferLocation = vertexBuffer-&gt;GetGPUVirtualAddress(); // \u5148\u524D\u521B\u5EFA\u7684defaultBuffer
vbv.StrideInBytes = VertexByteStride; // Vertex\u7ED3\u6784\u4F53\u7684\u5927\u5C0F
vbv.SizeInBytes = VertexBufferByteSize; // VertexBuffer\u603B\u5927\u5C0F

D3D12_INDEX_BUFFER_VIEW ibv;
ibv.BufferLocation = indexBuffer-&gt;GetGPUVirtualAddress();
ibv.Format = DXGI_FORMAT_R16_UINT; // Index Buffer\u6570\u636E\u683C\u5F0F
ibv.SizeInBytes = IndexBufferByteSize; // Index Buffer\u603B\u5927\u5C0F

// ...

// \u8BBE\u7F6EVBV, IBV
cmdList-&gt;IASetVertexBuffers(0, 1, &amp;vbv);
cmdList-&gt;IASetIndexBuffer(&amp;ibv);

// ...
// cmdList-&gt;DrawIndexedInstanced(...)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constant-buffer" tabindex="-1"><a class="header-anchor" href="#constant-buffer" aria-hidden="true">#</a> Constant Buffer</h2><h3 id="\u521B\u5EFA-1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-1" aria-hidden="true">#</a> \u521B\u5EFA</h3><p>Constant Buffer\u662F\u66F4\u6539\u5F88\u9891\u7E41\u7684\u6570\u636E, \u6240\u4EE5\u76F4\u63A5\u4F7F\u7528Upload Heap\u5411GPU\u63D0\u4F9B\u6570\u636E.</p><p>\u628A\u76F8\u540C\u7C7B\u578B\u7684constant buffer\u5B58\u5728\u540C\u4E00\u4E2AHeap\u4E2D, \u9700\u8981\u6CE8\u610FGPU\u53EA\u80FD\u8BFB\u53D6\u5730\u5740\u4E3A256\u500D\u6570\u7684constant buffer\u6570\u636E, \u6240\u4EE5\u8981\u5BF9constant buffer\u7684\u5927\u5C0F\u8FDB\u884C\u624B\u52A8\u5BF9\u9F50</p><div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>int elementByteSize = (sizeof(ConstantBuffer) + 0xFF) &amp; ~0xFF // 256\u5B57\u8282\u5BF9\u9F50

// \u521B\u5EFAUpload Heap
ThrowIfFailed(device-&gt;CreateCommittedResource(
    &amp;CD3DX12_HEAP_PROPERTIES(D3D12_HEAP_TYPE_UPLOAD),
    D3D12_HEAP_FLAG_NONE,
    &amp;CD3DX12_RESOURCE_DESC::Buffer(elementByteSize*elementCount),
    D3D12_RESOURCE_STATE_GENERIC_READ,
    nullptr,
    IID_PPV_ARGS(&amp;uploadBuffer)));

// Upload Heap\u6620\u5C04\u5230CPU\u7AEF\u6570\u636E
ThrowIfFailed(uploadBuffer-&gt;Map(0, nullptr, reinterpret_cast&lt;void**&gt;(&amp;mappedData)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Upload Buffer\u6620\u5C04\u5230CPU\u7AEF\u6570\u636E\u540E, \u76F4\u5230\u91CA\u653E\u90FD\u4E0D\u4F1AUnmap, \u6240\u4EE5\u9700\u8981\u7528\u6237\u81EA\u5DF1\u4FDD\u8BC1GPU\u8BFB\u53D6\u6570\u636E\u7684\u540C\u65F6CPU\u4E0D\u5728\u5199\u5165(\u4F7F\u7528\u540C\u6B65\u6280\u672F).</p><p>\u82E5\u8981\u4FEE\u6539constant buffer\u6570\u636E, \u76F4\u63A5\u4FEE\u6539Upload Buffer\u6620\u5C04\u5230\u7684CPU\u7AEF\u6570\u636E\u5373\u53EF</p><div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>memcpy(&amp;mappedData[elementIndex*elementByteSize], &amp;newData, sizeof(ConstantBuffer)); // mappedData\u7C7B\u578B\u4E3ABYTE*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-1" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>C++\u7AEF: \u5728Root Signature\u4E2D\u8BBE\u7F6E\u540E, \u6E32\u67D3\u5FAA\u73AF\u4E2D\u7ED1\u5B9A\u5BF9\u5E94\u7684Root Signature, \u4F7F\u7528\u504F\u79FB\u91CF\u8BBE\u7F6E\u5BF9\u5E94\u7684\u6570\u636E</p><div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>// \u5B9A\u4E49ConstantBuffer\u7ED3\u6784
struct ConstantBuffer{
    XMFLOAT4X4 world;
    XMFLOAT4x4 view;
    XMFLOAT4x4 proj;
};

// \u8BBE\u7F6ERoot Signature

// ...
// slotRootParameter[0].InitAs...
slotRootParameter[1].InitAsConstantBufferView(0); // \u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6ECBV\u53C2\u6570, \u4E5F\u53EF\u4EE5\u653E\u5728Descriptor Heap\u4E2D. \u53C2\u6570\u4E3AShaderRegister\u7F16\u53F7

// ...
// CD3DX12_ROOT_SIGNATURE_DESC rootSigDesc(..., slotRootParameter, ...)
// ...
// D3D12SerializeRootSignature(&amp;rootSigDesc, ...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>// \u6E32\u67D3\u5FAA\u73AF\u4E2D
int elementByteSize = (sizeof(ConstantBuffer) + 0xFF) &amp; ~0xFF // 256\u5B57\u8282\u5BF9\u9F50
D3D12_GPU_VIRTUAL_ADDRESS cbAddress = cbUploadBuffer-&gt;GetGPUVirtualAddress() + elementIndex * elementByteSize;
cmdList-&gt;SetGraphicsRootConstantBufferView(1, cbAddress);

// ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HLSL\u7AEF:</p><div class="language-HLSL ext-HLSL line-numbers-mode"><pre class="language-HLSL"><code>cbuffer cb: register(b0) // \u4E0ERootSignature\u4E2D\u8BBE\u7F6E\u7684ShaderRegister\u5BF9\u5E94
{
    float4x4 g_World;
    float4x4 g_View;
    float4x4 g_Proj;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u4F7F\u7528dx12\u7684\u65B0\u8BED\u6CD5</p><div class="language-HLSL ext-HLSL line-numbers-mode"><pre class="language-HLSL"><code>struct Constants{
    float4x4 World;
    float4x4 View;
    float4x4 Proj;
};

ConstantBuffer&lt;Constants&gt; gConstants: register(b0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="texture" tabindex="-1"><a class="header-anchor" href="#texture" aria-hidden="true">#</a> Texture</h2><h3 id="\u521B\u5EFA-2" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-2" aria-hidden="true">#</a> \u521B\u5EFA</h3><p>\u4E0EVertex Buffer/Index Buffer\u76F8\u4F3C, \u7ECF\u8FC7Upload Heap\u5411Default Heap\u4E0A\u4F20\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u6216\u7A0B\u5E8F\u5316\u751F\u6210\u7684\u6570\u636E</p><p>\u4E0D\u540C\u7684\u70B9\u662FResourceBarrier\u7684\u76EE\u6807\u4E0D\u662F<code>D3D12_RESOURCE_STATE_GENERIC_READ</code>\u800C\u662F<code>D3D12_RESOURCE_STATE_PIXEL_SHADER_RESOURCE</code></p><h3 id="\u4F7F\u7528-2" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-2" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u4E0ECBuffer\u76F8\u4F3C, \u5728Descriptor Heap\u4E0A\u521B\u5EFAShaderResourceView, \u8BBE\u7F6ERootSignature, \u6E32\u67D3\u5FAA\u73AF\u4E2D\u7ED1\u5B9A, \u5728HLSL\u4E2D\u4F7F\u7528.</p><p>PS. RootSignature\u4E0D\u652F\u6301\u4F7F\u7528<code>SetGraphicsShaderResourceView</code>\u76F4\u63A5\u7ED1\u5B9A\u6750\u8D28\u8D34\u56FE, \u6240\u4EE5\u53EA\u80FD\u4F7F\u7528Descriptor Heap\u7684\u65B9\u5F0F\u7ED1\u5B9ATexture.</p><p>PPS. \u652F\u6301\u4F7F\u7528<code>SetGraphicsShaderResourceView</code>\u7ED1\u5B9A\u7684\u662F\u53EA\u8BFB\u7F13\u51B2\u533A, \u6BD4\u5982<code>Buffer&lt;float4&gt;</code>\u6216<code>StructuredBuffer&lt;T&gt;</code>.</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,34),f=e("li",null,[i("DX12\u9F99\u4E66: "),e("em",null,"Introduction To 3D Game Programming With DirectX12")],-1),b={href:"https://www.braynzarsoft.net/viewtutorial/q16390-04-directx-12-braynzar-soft-tutorials",target:"_blank",rel:"noopener noreferrer"},p={href:"https://docs.microsoft.com/en-us/windows/win32/api/d3d12/",target:"_blank",rel:"noopener noreferrer"};function _(D,R){const n=t("ExternalLinkIcon");return s(),l("div",null,[c,e("p",null,[i("\u5173\u4E8E"),o,i(", "),e("a",v,[i("MSDN"),d(n)]),i("\u4E0A\u7684\u8BF4\u660E\u662F\uFF1A\u521B\u5EFA\u8D44\u6E90\u4E0E\u9690\u5F0F\u5806(implicit heap)\uFF0C\u8FD9\u4E2A\u9690\u5F0F\u5806\u5927\u5C0F\u53EF\u4EE5\u5BB9\u7EB3\u6574\u4E2A\u8D44\u6E90, \u800C\u521B\u5EFA\u7684\u8D44\u6E90\u8D44\u6E90\u88AB\u6620\u5C04\u5230\u9690\u5F0F\u5806.")]),m,e("ol",null,[f,e("li",null,[e("a",b,[i("Braynzar Soft DX12 tutorals"),d(n)])]),e("li",null,[e("a",p,[i("MSDN"),d(n)])])])])}const C=a(u,[["render",_],["__file","dx12_2_resources.html.vue"]]);export{C as default};
