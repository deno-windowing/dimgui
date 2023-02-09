const glfwFuncs = {
  glfwInit: { parameters: [], result: "i32" },
  glfwTerminate: { parameters: [], result: "void" },
  glfwSetErrorCallback: {
    parameters: ["function"],
    result: "void",
  },
  glfwCreateWindow: {
    parameters: ["i32", "i32", "buffer", "pointer", "pointer"],
    result: "pointer",
  },
  glfwWindowHint: {
    parameters: ["i32", "i32"],
    result: "void",
  },
  glfwDestroyWindow: {
    parameters: ["pointer"],
    result: "void",
  },
  glfwMakeContextCurrent: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwGetProcAddress: {
    parameters: ["buffer"],
    result: "pointer",
  },
  glfwWindowShouldClose: {
    parameters: ["pointer"],
    result: "i32",
  },
  glfwSwapBuffers: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwSwapInterval: {
    parameters: ["i32"],
    result: "void",
  },
  glfwPollEvents: {
    parameters: [],
    result: "void",
    callback: false,
  },
  glfwSetCursorPosCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetWindowTitle: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },
  glfwGetWindowAttrib: {
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  glfwSetWindowAttrib: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
    callback: true,
  },
  glfwFocusWindow: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwSetWindowIcon: {
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
    callback: true,
  },
  glfwGetWindowPos: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },
  glfwSetWindowPos: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
    callback: true,
  },
  glfwGetWindowSize: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },
  glfwSetWindowSizeLimits: {
    parameters: ["pointer", "i32", "i32", "i32", "i32"],
    result: "void",
  },
  glfwSetWindowAspectRatio: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
    callback: true,
  },
  glfwSetWindowSize: {
    parameters: ["pointer", "i32", "i32"],
    result: "void",
    callback: true,
  },
  glfwGetFramebufferSize: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },
  glfwGetWindowFrameSize: {
    parameters: ["pointer", "buffer", "buffer", "buffer", "buffer"],
    result: "void",
  },
  glfwGetWindowContentScale: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },
  glfwGetWindowOpacity: {
    parameters: ["pointer"],
    result: "f32",
  },
  glfwSetWindowOpacity: {
    parameters: ["pointer", "f32"],
    result: "void",
    callback: true,
  },
  glfwIconifyWindow: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwRestoreWindow: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwMaximizeWindow: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwShowWindow: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwHideWindow: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwRequestWindowAttention: {
    parameters: ["pointer"],
    result: "void",
    callback: true,
  },
  glfwSetWindowPosCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetWindowSizeCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetWindowCloseCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetWindowRefreshCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetWindowFocusCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetWindowIconifyCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetWindowMaximizeCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetFramebufferSizeCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetWindowContentScaleCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetKeyCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetCharCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetMouseButtonCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetCursorEnterCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetScrollCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwSetDropCallback: {
    parameters: ["pointer", "function"],
    result: "pointer",
  },
  glfwGetCursorPos: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },
  glfwSetCursor: {
    parameters: ["pointer", "pointer"],
    result: "void",
    callback: true,
  },
  glfwCreateStandardCursor: {
    parameters: ["i32"],
    result: "pointer",
  },
  glfwDestroyCursor: {
    parameters: ["pointer"],
    result: "void",
  },
  glfwCreateCursor: {
    parameters: ["buffer", "i32", "i32"],
    result: "pointer",
  },
  glfwWaitEvents: {
    parameters: [],
    result: "void",
    callback: true,
  },
  glfwVulkanSupported: {
    parameters: [],
    result: "i32",
  },
  glfwGetRequiredInstanceExtensions: {
    parameters: ["buffer"],
    result: "pointer",
  },
  glfwGetInstanceProcAddress: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },
  glfwGetPhysicalDevicePresentationSupport: {
    parameters: ["pointer", "pointer", "i32"],
    result: "i32",
  },
  glfwCreateWindowSurface: {
    parameters: ["pointer", "pointer", "pointer", "buffer"],
    result: "i32",
  },
  glfwGetWin32Adapter: {
    name: Deno.build.os === "windows" ? "glfwGetWin32Adapter" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetWin32Monitor: {
    name: Deno.build.os === "windows" ? "glfwGetWin32Monitor" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetWin32Window: {
    name: Deno.build.os === "windows" ? "glfwGetWin32Window" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetWGLContext: {
    name: Deno.build.os === "windows" ? "glfwGetWGLContext" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetCocoaMonitor: {
    name: Deno.build.os === "darwin" ? "glfwGetCocoaMonitor" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetCocoaWindow: {
    name: Deno.build.os === "darwin" ? "glfwGetCocoaWindow" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetNSGLContext: {
    name: Deno.build.os === "darwin" ? "glfwGetNSGLContext" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetX11Display: {
    name: Deno.build.os === "linux" ? "glfwGetX11Display" : "glfwInit",
    parameters: [],
    result: "pointer",
  },
  glfwGetX11Adapter: {
    name: Deno.build.os === "linux" ? "glfwGetX11Adapter" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetX11Monitor: {
    name: Deno.build.os === "linux" ? "glfwGetX11Monitor" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetX11Window: {
    name: Deno.build.os === "linux" ? "glfwGetX11Window" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetGLXContext: {
    name: Deno.build.os === "linux" ? "glfwGetGLXContext" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetGLXWindow: {
    name: Deno.build.os === "linux" ? "glfwGetGLXWindow" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetWaylandDisplay: {
    name: Deno.build.os === "linux" ? "glfwGetWaylandDisplay" : "glfwInit",
    parameters: [],
    result: "pointer",
  },
  glfwGetWaylandMonitor: {
    name: Deno.build.os === "linux" ? "glfwGetWaylandMonitor" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetWaylandWindow: {
    name: Deno.build.os === "linux" ? "glfwGetWaylandWindow" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetEGLDisplay: {
    name: Deno.build.os === "linux" ? "glfwGetEGLDisplay" : "glfwInit",
    parameters: [],
    result: "pointer",
  },
  glfwGetEGLContext: {
    name: Deno.build.os === "linux" ? "glfwGetEGLContext" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetEGLSurface: {
    name: Deno.build.os === "linux" ? "glfwGetEGLSurface" : "glfwInit",
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetMonitors: {
    parameters: ["buffer"],
    result: "pointer",
  },
  glfwGetPrimaryMonitor: {
    parameters: [],
    result: "pointer",
  },
  glfwGetMonitorPos: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },
  glfwGetMonitorWorkarea: {
    parameters: ["pointer", "buffer", "buffer", "buffer", "buffer"],
    result: "void",
  },
  glfwGetMonitorPhysicalSize: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },
  glfwGetMonitorContentScale: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },
  glfwGetMonitorName: {
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetVideoModes: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },
  glfwGetVideoMode: {
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwGetWindowMonitor: {
    parameters: ["pointer"],
    result: "pointer",
  },
  glfwSetWindowMonitor: {
    parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32", "i32"],
    result: "void",
    callback: true,
  },
  glfwSetInputMode: {
    name: "glfwSetInputMode",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  glfwGetInputMode: {
    name: "glfwGetInputMode",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  glfwRawMouseMotionSupported: {
    name: "glfwRawMouseMotionSupported",
    parameters: [],
    result: "i32",
  },
  glfwSetCursorPos: {
    name: "glfwSetCursorPos",
    parameters: ["pointer", "f64", "f64"],
    result: "void",
  },
} as const;

const imguiFuncs = {
  createContext: {
    name: "igCreateContext",
    parameters: ["pointer"],
    result: "pointer",
  },
  destroyContext: {
    name: "igDestroyContext",
    parameters: ["pointer"],
    result: "void",
  },
  SetCurrentContext: {
    name: "igSetCurrentContext",
    parameters: ["pointer"],
    result: "void",
  },
  GetCurrentContext: {
    name: "igGetCurrentContext",
    parameters: [],
    result: "pointer",
  },
  ShowDemoWindow: {
    name: "igShowDemoWindow",
    parameters: ["pointer"],
    result: "void",
  },
  StyleColorsDark: {
    name: "igStyleColorsDark",
    parameters: ["pointer"],
    result: "void",
  },

  NewFrame: {
    name: "igNewFrame",
    parameters: [],
    result: "void",
  },
  Render: {
    name: "igRender",
    parameters: [],
    result: "void",
  },
  GetDrawData: {
    name: "igGetDrawData",
    parameters: [],
    result: "pointer",
  },
  Begin: {
    name: "igBegin",
    parameters: ["buffer", "buffer", "u32"],
    result: "bool",
  },
  End: {
    name: "igEnd",
    parameters: [],
    result: "void",
  },
  Text: {
    name: "igText",
    parameters: ["buffer"],
    result: "void",
  },
  LogImDrawData: {
    name: "LogImDrawData",
    parameters: ["pointer"],
    result: "void",
  },
  ImGuiIOGetConfigFlag: {
    name: "ImGuiIOGetConfigFlag",
    parameters: ["pointer", "i32"],
    result: "bool",
  },
  ImGuiIOSetConfigFlag: {
    name: "ImGuiIOSetConfigFlag",
    parameters: ["pointer", "i32", "bool"],
    result: "void",
  },
} as const satisfies Deno.ForeignLibraryInterface;

const imguiImplFuncs = {
  ImplGlfw_InitForOpenGL: {
    name: "ImGui_ImplGlfw_InitForOpenGL",
    parameters: ["pointer", "bool"],
    result: "bool",
  },
  ImplOpenGL3_NewFrame: {
    name: "ImGui_ImplOpenGL3_NewFrame",
    parameters: [],
    result: "void",
  },
  ImplGlfw_Shutdown: {
    name: "ImGui_ImplGlfw_Shutdown",
    parameters: [],
    result: "void",
  },
  ImplOpenGL3_Init: {
    name: "ImGui_ImplOpenGL3_Init",
    parameters: ["buffer"],
    result: "bool",
  },
  ImplGlfw_NewFrame: {
    name: "ImGui_ImplGlfw_NewFrame",
    parameters: [],
    result: "void",
  },
  ImGui_ImplOpenGL3_RenderDrawData: {
    name: "ImGui_ImplOpenGL3_RenderDrawData",
    parameters: ["pointer"],
    result: "void",
  },
  ImplOpenGL3_Shutdown: {
    name: "ImGui_ImplOpenGL3_Shutdown",
    parameters: [],
    result: "void",
  },
} as const satisfies Deno.ForeignLibraryInterface;

const lib = Deno.dlopen(
  "D:/dev/deno-imgui/imgui/build/bin/imgui.dll",
  { ...glfwFuncs, ...imguiFuncs, ...imguiImplFuncs } as const,
);

export const ffi = lib.symbols;

export function cstr(str: string) {
  return new TextEncoder().encode(str + "\0");
}
