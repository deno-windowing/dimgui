// export function imVec2_ImVec2_Nil(): ImVec2 {
//   return imgui.ImVec2_ImVec2_Nil();
// }
// export function imVec2_destroy(self: ImVec2): void {
//    imgui.ImVec2_destroy(self);
// }
// export function imVec2_ImVec2_Float(_x: number, _y: number): ImVec2 {
//   return imgui.ImVec2_ImVec2_Float(_x, _y);
// }
// export function imVec4_ImVec4_Nil(): ImVec4 {
//   return imgui.ImVec4_ImVec4_Nil();
// }
// export function imVec4_destroy(self: ImVec4): void {
//    imgui.ImVec4_destroy(self);
// }
// export function imVec4_ImVec4_Float(_x: number, _y: number, _z: number, _w: number): ImVec4 {
//   return imgui.ImVec4_ImVec4_Float(_x, _y, _z, _w);
// }
// export function createContext(shared_font_atlas: ImFontAtlas): ImGuiContext {
//   return imgui.igCreateContext(shared_font_atlas);
// }
// export function destroyContext(ctx: ImGuiContext): void {
//    imgui.igDestroyContext(ctx);
// }
// export function getCurrentContext(): ImGuiContext {
//   return imgui.igGetCurrentContext();
// }
// export function setCurrentContext(ctx: ImGuiContext): void {
//    imgui.igSetCurrentContext(ctx);
// }
// export function getIO(): ImGuiIO {
//   return imgui.igGetIO();
// }
// export function getStyle(): ImGuiStyle {
//   return imgui.igGetStyle();
// }
// export function newFrame(): void {
//    imgui.igNewFrame();
// }
// export function endFrame(): void {
//    imgui.igEndFrame();
// }
// export function render(): void {
//    imgui.igRender();
// }
// export function getDrawData(): ImDrawData {
//   return imgui.igGetDrawData();
// }
// export function showDemoWindow(open?: Uint8Array): void {
//    imgui.igShowDemoWindow(open ?? null);
// }
// export function showMetricsWindow(open?: Uint8Array): void {
//    imgui.igShowMetricsWindow(open ?? null);
// }
// export function showDebugLogWindow(open?: Uint8Array): void {
//    imgui.igShowDebugLogWindow(open ?? null);
// }
// export function showStackToolWindow(open?: Uint8Array): void {
//    imgui.igShowStackToolWindow(open ?? null);
// }
// export function showAboutWindow(open?: Uint8Array): void {
//    imgui.igShowAboutWindow(open ?? null);
// }
// export function showStyleEditor(ref: ImGuiStyle): void {
//    imgui.igShowStyleEditor(ref);
// }
// export function showStyleSelector(label: StringSource): boolean {
//   return imgui.igShowStyleSelector(cString(label));
// }
// export function showFontSelector(label: StringSource): void {
//    imgui.igShowFontSelector(cString(label));
// }
// export function showUserGuide(): void {
//    imgui.igShowUserGuide();
// }
// export function getVersion(): string {
//   return imgui.igGetVersion();
// }
// export function styleColorsDark(dst: ImGuiStyle): void {
//    imgui.igStyleColorsDark(dst);
// }
// export function styleColorsLight(dst: ImGuiStyle): void {
//    imgui.igStyleColorsLight(dst);
// }
// export function styleColorsClassic(dst: ImGuiStyle): void {
//    imgui.igStyleColorsClassic(dst);
// }
// export function begin(name: StringSource, open?: Uint8Array, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBegin(cString(name), open ?? null, flags);
// }
// export function end(): void {
//    imgui.igEnd();
// }
// export function beginChild_Str(str_id: StringSource, size: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChild_Str(cString(str_id), size[BUFFER], border, flags);
// }
// export function beginChild_ID(id: ImGuiID, size: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChild_ID(id, size[BUFFER], border, flags);
// }
// export function endChild(): void {
//    imgui.igEndChild();
// }
// export function isWindowAppearing(): boolean {
//   return imgui.igIsWindowAppearing();
// }
// export function isWindowCollapsed(): boolean {
//   return imgui.igIsWindowCollapsed();
// }
// export function isWindowFocused(flags: ImGuiFocusedFlags): boolean {
//   return imgui.igIsWindowFocused(flags);
// }
// export function isWindowHovered(flags: ImGuiHoveredFlags): boolean {
//   return imgui.igIsWindowHovered(flags);
// }
// export function getWindowDrawList(): ImDrawList {
//   return imgui.igGetWindowDrawList();
// }
// export function getWindowDpiScale(): number {
//   return imgui.igGetWindowDpiScale();
// }
// export function getWindowPos(pOut: ImVec2): void {
//    imgui.igGetWindowPos(pOut);
// }
// export function getWindowSize(pOut: ImVec2): void {
//    imgui.igGetWindowSize(pOut);
// }
// export function getWindowWidth(): number {
//   return imgui.igGetWindowWidth();
// }
// export function getWindowHeight(): number {
//   return imgui.igGetWindowHeight();
// }
// export function getWindowViewport(): ImGuiViewport {
//   return imgui.igGetWindowViewport();
// }
// export function setNextWindowPos(pos: ImVec2, cond: ImGuiCond, pivot: ImVec2): void {
//    imgui.igSetNextWindowPos(pos[BUFFER], cond, pivot[BUFFER]);
// }
// export function setNextWindowSize(size: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetNextWindowSize(size[BUFFER], cond);
// }
// export function setNextWindowSizeConstraints(size_min: ImVec2, size_max: ImVec2, custom_callback: ImGuiSizeCallback, custom_callback_data: BufferSource): void {
//    imgui.igSetNextWindowSizeConstraints(size_min[BUFFER], size_max[BUFFER], custom_callback.pointer, custom_callback_data);
// }
// export function setNextWindowContentSize(size: ImVec2): void {
//    imgui.igSetNextWindowContentSize(size[BUFFER]);
// }
// export function setNextWindowCollapsed(collapsed: boolean, cond: ImGuiCond): void {
//    imgui.igSetNextWindowCollapsed(collapsed, cond);
// }
// export function setNextWindowFocus(): void {
//    imgui.igSetNextWindowFocus();
// }
// export function setNextWindowScroll(scroll: ImVec2): void {
//    imgui.igSetNextWindowScroll(scroll[BUFFER]);
// }
// export function setNextWindowBgAlpha(alpha: number): void {
//    imgui.igSetNextWindowBgAlpha(alpha);
// }
// export function setNextWindowViewport(viewport_id: ImGuiID): void {
//    imgui.igSetNextWindowViewport(viewport_id);
// }
// export function setWindowPos_Vec2(pos: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowPos_Vec2(pos[BUFFER], cond);
// }
// export function setWindowSize_Vec2(size: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowSize_Vec2(size[BUFFER], cond);
// }
// export function setWindowCollapsed_Bool(collapsed: boolean, cond: ImGuiCond): void {
//    imgui.igSetWindowCollapsed_Bool(collapsed, cond);
// }
// export function setWindowFocus_Nil(): void {
//    imgui.igSetWindowFocus_Nil();
// }
// export function setWindowFontScale(scale: number): void {
//    imgui.igSetWindowFontScale(scale);
// }
// export function setWindowPos_Str(name: StringSource, pos: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowPos_Str(cString(name), pos[BUFFER], cond);
// }
// export function setWindowSize_Str(name: StringSource, size: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowSize_Str(cString(name), size[BUFFER], cond);
// }
// export function setWindowCollapsed_Str(name: StringSource, collapsed: boolean, cond: ImGuiCond): void {
//    imgui.igSetWindowCollapsed_Str(cString(name), collapsed, cond);
// }
// export function setWindowFocus_Str(name: StringSource): void {
//    imgui.igSetWindowFocus_Str(cString(name));
// }
// export function getContentRegionAvail(pOut: ImVec2): void {
//    imgui.igGetContentRegionAvail(pOut);
// }
// export function getContentRegionMax(pOut: ImVec2): void {
//    imgui.igGetContentRegionMax(pOut);
// }
// export function getWindowContentRegionMin(pOut: ImVec2): void {
//    imgui.igGetWindowContentRegionMin(pOut);
// }
// export function getWindowContentRegionMax(pOut: ImVec2): void {
//    imgui.igGetWindowContentRegionMax(pOut);
// }
// export function getScrollX(): number {
//   return imgui.igGetScrollX();
// }
// export function getScrollY(): number {
//   return imgui.igGetScrollY();
// }
// export function setScrollX_Float(scroll_x: number): void {
//    imgui.igSetScrollX_Float(scroll_x);
// }
// export function setScrollY_Float(scroll_y: number): void {
//    imgui.igSetScrollY_Float(scroll_y);
// }
// export function getScrollMaxX(): number {
//   return imgui.igGetScrollMaxX();
// }
// export function getScrollMaxY(): number {
//   return imgui.igGetScrollMaxY();
// }
// export function setScrollHereX(center_x_ratio: number): void {
//    imgui.igSetScrollHereX(center_x_ratio);
// }
// export function setScrollHereY(center_y_ratio: number): void {
//    imgui.igSetScrollHereY(center_y_ratio);
// }
// export function setScrollFromPosX_Float(local_x: number, center_x_ratio: number): void {
//    imgui.igSetScrollFromPosX_Float(local_x, center_x_ratio);
// }
// export function setScrollFromPosY_Float(local_y: number, center_y_ratio: number): void {
//    imgui.igSetScrollFromPosY_Float(local_y, center_y_ratio);
// }
// export function pushFont(font: ImFont): void {
//    imgui.igPushFont(font);
// }
// export function popFont(): void {
//    imgui.igPopFont();
// }
// export function pushStyleColor_U32(idx: ImGuiCol, col: ImU32): void {
//    imgui.igPushStyleColor_U32(idx, col);
// }
// export function pushStyleColor_Vec4(idx: ImGuiCol, col: ImVec4): void {
//    imgui.igPushStyleColor_Vec4(idx, col[BUFFER]);
// }
// export function popStyleColor(count: number): void {
//    imgui.igPopStyleColor(count);
// }
// export function pushStyleVar_Float(idx: ImGuiStyleVar, val: number): void {
//    imgui.igPushStyleVar_Float(idx, val);
// }
// export function pushStyleVar_Vec2(idx: ImGuiStyleVar, val: ImVec2): void {
//    imgui.igPushStyleVar_Vec2(idx, val[BUFFER]);
// }
// export function popStyleVar(count: number): void {
//    imgui.igPopStyleVar(count);
// }
// export function pushAllowKeyboardFocus(allow_keyboard_focus: boolean): void {
//    imgui.igPushAllowKeyboardFocus(allow_keyboard_focus);
// }
// export function popAllowKeyboardFocus(): void {
//    imgui.igPopAllowKeyboardFocus();
// }
// export function pushButtonRepeat(repeat: boolean): void {
//    imgui.igPushButtonRepeat(repeat);
// }
// export function popButtonRepeat(): void {
//    imgui.igPopButtonRepeat();
// }
// export function pushItemWidth(item_width: number): void {
//    imgui.igPushItemWidth(item_width);
// }
// export function popItemWidth(): void {
//    imgui.igPopItemWidth();
// }
// export function setNextItemWidth(item_width: number): void {
//    imgui.igSetNextItemWidth(item_width);
// }
// export function calcItemWidth(): number {
//   return imgui.igCalcItemWidth();
// }
// export function pushTextWrapPos(wrap_local_pos_x: number): void {
//    imgui.igPushTextWrapPos(wrap_local_pos_x);
// }
// export function popTextWrapPos(): void {
//    imgui.igPopTextWrapPos();
// }
// export function getFont(): ImFont {
//   return imgui.igGetFont();
// }
// export function getFontSize(): number {
//   return imgui.igGetFontSize();
// }
// export function getFontTexUvWhitePixel(pOut: ImVec2): void {
//    imgui.igGetFontTexUvWhitePixel(pOut);
// }
// export function getColorU32_Col(idx: ImGuiCol, alpha_mul: number): ImU32 {
//   return imgui.igGetColorU32_Col(idx, alpha_mul);
// }
// export function getColorU32_Vec4(col: ImVec4): ImU32 {
//   return imgui.igGetColorU32_Vec4(col[BUFFER]);
// }
// export function getColorU32_U32(col: ImU32): ImU32 {
//   return imgui.igGetColorU32_U32(col);
// }
// export function getStyleColorVec4(idx: ImGuiCol): ImVec4 {
//   return imgui.igGetStyleColorVec4(idx);
// }
// export function separator(): void {
//    imgui.igSeparator();
// }
// export function sameLine(offset_from_start_x: number, spacing: number): void {
//    imgui.igSameLine(offset_from_start_x, spacing);
// }
// export function newLine(): void {
//    imgui.igNewLine();
// }
// export function spacing(): void {
//    imgui.igSpacing();
// }
// export function dummy(size: ImVec2): void {
//    imgui.igDummy(size[BUFFER]);
// }
// export function indent(indent_w: number): void {
//    imgui.igIndent(indent_w);
// }
// export function unindent(indent_w: number): void {
//    imgui.igUnindent(indent_w);
// }
// export function beginGroup(): void {
//    imgui.igBeginGroup();
// }
// export function endGroup(): void {
//    imgui.igEndGroup();
// }
// export function getCursorPos(pOut: ImVec2): void {
//    imgui.igGetCursorPos(pOut);
// }
// export function getCursorPosX(): number {
//   return imgui.igGetCursorPosX();
// }
// export function getCursorPosY(): number {
//   return imgui.igGetCursorPosY();
// }
// export function setCursorPos(local_pos: ImVec2): void {
//    imgui.igSetCursorPos(local_pos[BUFFER]);
// }
// export function setCursorPosX(local_x: number): void {
//    imgui.igSetCursorPosX(local_x);
// }
// export function setCursorPosY(local_y: number): void {
//    imgui.igSetCursorPosY(local_y);
// }
// export function getCursorStartPos(pOut: ImVec2): void {
//    imgui.igGetCursorStartPos(pOut);
// }
// export function getCursorScreenPos(pOut: ImVec2): void {
//    imgui.igGetCursorScreenPos(pOut);
// }
// export function setCursorScreenPos(pos: ImVec2): void {
//    imgui.igSetCursorScreenPos(pos[BUFFER]);
// }
// export function alignTextToFramePadding(): void {
//    imgui.igAlignTextToFramePadding();
// }
// export function getTextLineHeight(): number {
//   return imgui.igGetTextLineHeight();
// }
// export function getTextLineHeightWithSpacing(): number {
//   return imgui.igGetTextLineHeightWithSpacing();
// }
// export function getFrameHeight(): number {
//   return imgui.igGetFrameHeight();
// }
// export function getFrameHeightWithSpacing(): number {
//   return imgui.igGetFrameHeightWithSpacing();
// }
// export function pushID_Str(str_id: StringSource): void {
//    imgui.igPushID_Str(cString(str_id));
// }
// export function pushID_StrStr(str_id_begin: StringSource, str_id_end: StringSource): void {
//    imgui.igPushID_StrStr(cString(str_id_begin), cString(str_id_end));
// }
// export function pushID_Ptr(ptr_id: BufferSource): void {
//    imgui.igPushID_Ptr(ptr_id);
// }
// export function pushID_Int(int_id: number): void {
//    imgui.igPushID_Int(int_id);
// }
// export function popID(): void {
//    imgui.igPopID();
// }
// export function getID_Str(str_id: StringSource): ImGuiID {
//   return imgui.igGetID_Str(cString(str_id));
// }
// export function getID_StrStr(str_id_begin: StringSource, str_id_end: StringSource): ImGuiID {
//   return imgui.igGetID_StrStr(cString(str_id_begin), cString(str_id_end));
// }
// export function getID_Ptr(ptr_id: BufferSource): ImGuiID {
//   return imgui.igGetID_Ptr(ptr_id);
// }
// export function textUnformatted(text: StringSource, text_end: StringSource): void {
//    imgui.igTextUnformatted(cString(text), cString(text_end));
// }
// export function text(fmt: StringSource): void {
//    imgui.igText(cString(fmt));
// }
// export function textV(fmt: StringSource): void {
//    imgui.igTextV(cString(fmt));
// }
// export function textColored(col: ImVec4, fmt: StringSource): void {
//    imgui.igTextColored(col[BUFFER], cString(fmt));
// }
// export function textColoredV(col: ImVec4, fmt: StringSource): void {
//    imgui.igTextColoredV(col[BUFFER], cString(fmt));
// }
// export function textDisabled(fmt: StringSource): void {
//    imgui.igTextDisabled(cString(fmt));
// }
// export function textDisabledV(fmt: StringSource): void {
//    imgui.igTextDisabledV(cString(fmt));
// }
// export function textWrapped(fmt: StringSource): void {
//    imgui.igTextWrapped(cString(fmt));
// }
// export function textWrappedV(fmt: StringSource): void {
//    imgui.igTextWrappedV(cString(fmt));
// }
// export function labelText(label: StringSource, fmt: StringSource): void {
//    imgui.igLabelText(cString(label), cString(fmt));
// }
// export function labelTextV(label: StringSource, fmt: StringSource): void {
//    imgui.igLabelTextV(cString(label), cString(fmt));
// }
// export function bulletText(fmt: StringSource): void {
//    imgui.igBulletText(cString(fmt));
// }
// export function bulletTextV(fmt: StringSource): void {
//    imgui.igBulletTextV(cString(fmt));
// }
// export function button(label: StringSource, size: ImVec2): boolean {
//   return imgui.igButton(cString(label), size[BUFFER]);
// }
// export function smallButton(label: StringSource): boolean {
//   return imgui.igSmallButton(cString(label));
// }
// export function invisibleButton(str_id: StringSource, size: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igInvisibleButton(cString(str_id), size[BUFFER], flags);
// }
// export function arrowButton(str_id: StringSource, dir: ImGuiDir): boolean {
//   return imgui.igArrowButton(cString(str_id), dir);
// }
// export function checkbox(label: StringSource, v?: Uint8Array): boolean {
//   return imgui.igCheckbox(cString(label), v ?? null);
// }
// export function checkboxFlags_IntPtr(label: StringSource, flags: Int32Array, flags_value: number): boolean {
//   return imgui.igCheckboxFlags_IntPtr(cString(label), flags, flags_value);
// }
// export function checkboxFlags_UintPtr(label: StringSource, flags: unsigned int, flags_value: number): boolean {
//   return imgui.igCheckboxFlags_UintPtr(cString(label), flags, flags_value);
// }
// export function radioButton_Bool(label: StringSource, active: boolean): boolean {
//   return imgui.igRadioButton_Bool(cString(label), active);
// }
// export function radioButton_IntPtr(label: StringSource, v: Int32Array, v_button: number): boolean {
//   return imgui.igRadioButton_IntPtr(cString(label), v, v_button);
// }
// export function progressBar(fraction: number, size_arg: ImVec2, overlay: StringSource): void {
//    imgui.igProgressBar(fraction, size_arg[BUFFER], cString(overlay));
// }
// export function bullet(): void {
//    imgui.igBullet();
// }
// export function image(user_texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, tint_col: ImVec4, border_col: ImVec4): void {
//    imgui.igImage(user_texture_id, size[BUFFER], uv0[BUFFER], uv1[BUFFER], tint_col[BUFFER], border_col[BUFFER]);
// }
// export function imageButton(str_id: StringSource, user_texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, bg_col: ImVec4, tint_col: ImVec4): boolean {
//   return imgui.igImageButton(cString(str_id), user_texture_id, size[BUFFER], uv0[BUFFER], uv1[BUFFER], bg_col[BUFFER], tint_col[BUFFER]);
// }
// export function beginCombo(label: StringSource, preview_value: StringSource, flags: ImGuiComboFlags): boolean {
//   return imgui.igBeginCombo(cString(label), cString(preview_value), flags);
// }
// export function endCombo(): void {
//    imgui.igEndCombo();
// }
// export function combo_Str_arr(label: StringSource, current_item: Int32Array, items: char[], items_count: number, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_Str_arr(cString(label), current_item, items, items_count, popup_max_height_in_items);
// }
// export function combo_Str(label: StringSource, current_item: Int32Array, items_separated_by_zeros: StringSource, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_Str(cString(label), current_item, cString(items_separated_by_zeros), popup_max_height_in_items);
// }
// export function combo_FnBoolPtr(label: StringSource, current_item: Int32Array, data: Deno.UnsafeCallback, idx: number, out_text): Deno.UnsafeCallback, data: BufferSource, items_count: number, popup_max_height_in_items: number): boolean {
//   return imgui.igCombo_FnBoolPtr(cString(label), current_item, data, idx, out_text), data, items_count, popup_max_height_in_items);
// }
// export function dragFloat(label: StringSource, v: Float32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragFloat2(label: StringSource, v: Float32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat2(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragFloat3(label: StringSource, v: Float32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat3(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragFloat4(label: StringSource, v: Float32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloat4(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragFloatRange2(label: StringSource, v_current_min: Float32Array, v_current_max: Float32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, format_max: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragFloatRange2(cString(label), v_current_min, v_current_max, v_speed, v_min, v_max, cString(format), cString(format_max), flags);
// }
// export function dragInt(label: StringSource, v: Int32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragInt2(label: StringSource, v: Int32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt2(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragInt3(label: StringSource, v: Int32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt3(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragInt4(label: StringSource, v: Int32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragInt4(cString(label), v, v_speed, v_min, v_max, cString(format), flags);
// }
// export function dragIntRange2(label: StringSource, v_current_min: Int32Array, v_current_max: Int32Array, v_speed: number, v_min: number, v_max: number, format: StringSource, format_max: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragIntRange2(cString(label), v_current_min, v_current_max, v_speed, v_min, v_max, cString(format), cString(format_max), flags);
// }
// export function dragScalar(label: StringSource, data_type: ImGuiDataType, data: BufferSource, v_speed: number, min: BufferSource, max: BufferSource, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragScalar(cString(label), data_type, data, v_speed, min, max, cString(format), flags);
// }
// export function dragScalarN(label: StringSource, data_type: ImGuiDataType, data: BufferSource, components: number, v_speed: number, min: BufferSource, max: BufferSource, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragScalarN(cString(label), data_type, data, components, v_speed, min, max, cString(format), flags);
// }
// export function sliderFloat(label: StringSource, v: Float32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderFloat2(label: StringSource, v: Float32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat2(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderFloat3(label: StringSource, v: Float32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat3(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderFloat4(label: StringSource, v: Float32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderFloat4(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderAngle(label: StringSource, v_rad: Float32Array, v_degrees_min: number, v_degrees_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderAngle(cString(label), v_rad, v_degrees_min, v_degrees_max, cString(format), flags);
// }
// export function sliderInt(label: StringSource, v: Int32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderInt2(label: StringSource, v: Int32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt2(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderInt3(label: StringSource, v: Int32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt3(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderInt4(label: StringSource, v: Int32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderInt4(cString(label), v, v_min, v_max, cString(format), flags);
// }
// export function sliderScalar(label: StringSource, data_type: ImGuiDataType, data: BufferSource, min: BufferSource, max: BufferSource, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderScalar(cString(label), data_type, data, min, max, cString(format), flags);
// }
// export function sliderScalarN(label: StringSource, data_type: ImGuiDataType, data: BufferSource, components: number, min: BufferSource, max: BufferSource, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igSliderScalarN(cString(label), data_type, data, components, min, max, cString(format), flags);
// }
// export function vSliderFloat(label: StringSource, size: ImVec2, v: Float32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderFloat(cString(label), size[BUFFER], v, v_min, v_max, cString(format), flags);
// }
// export function vSliderInt(label: StringSource, size: ImVec2, v: Int32Array, v_min: number, v_max: number, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderInt(cString(label), size[BUFFER], v, v_min, v_max, cString(format), flags);
// }
// export function vSliderScalar(label: StringSource, size: ImVec2, data_type: ImGuiDataType, data: BufferSource, min: BufferSource, max: BufferSource, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igVSliderScalar(cString(label), size[BUFFER], data_type, data, min, max, cString(format), flags);
// }
// export function inputText(label: StringSource, buf: StringSource, buf_size: Deno.PointerValue, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: BufferSource): boolean {
//   return imgui.igInputText(cString(label), cString(buf), buf_size, flags, callback.pointer, user_data);
// }
// export function inputTextMultiline(label: StringSource, buf: StringSource, buf_size: Deno.PointerValue, size: ImVec2, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: BufferSource): boolean {
//   return imgui.igInputTextMultiline(cString(label), cString(buf), buf_size, size[BUFFER], flags, callback.pointer, user_data);
// }
// export function inputTextWithHint(label: StringSource, hint: StringSource, buf: StringSource, buf_size: Deno.PointerValue, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: BufferSource): boolean {
//   return imgui.igInputTextWithHint(cString(label), cString(hint), cString(buf), buf_size, flags, callback.pointer, user_data);
// }
// export function inputFloat(label: StringSource, v: Float32Array, step: number, step_fast: number, format: StringSource, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat(cString(label), v, step, step_fast, cString(format), flags);
// }
// export function inputFloat2(label: StringSource, v: Float32Array, format: StringSource, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat2(cString(label), v, cString(format), flags);
// }
// export function inputFloat3(label: StringSource, v: Float32Array, format: StringSource, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat3(cString(label), v, cString(format), flags);
// }
// export function inputFloat4(label: StringSource, v: Float32Array, format: StringSource, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputFloat4(cString(label), v, cString(format), flags);
// }
// export function inputInt(label: StringSource, v: Int32Array, step: number, step_fast: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt(cString(label), v, step, step_fast, flags);
// }
// export function inputInt2(label: StringSource, v: Int32Array, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt2(cString(label), v, flags);
// }
// export function inputInt3(label: StringSource, v: Int32Array, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt3(cString(label), v, flags);
// }
// export function inputInt4(label: StringSource, v: Int32Array, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputInt4(cString(label), v, flags);
// }
// export function inputDouble(label: StringSource, v: Float64Array, step: number, step_fast: number, format: StringSource, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputDouble(cString(label), v, step, step_fast, cString(format), flags);
// }
// export function inputScalar(label: StringSource, data_type: ImGuiDataType, data: BufferSource, step: BufferSource, step_fast: BufferSource, format: StringSource, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputScalar(cString(label), data_type, data, step, step_fast, cString(format), flags);
// }
// export function inputScalarN(label: StringSource, data_type: ImGuiDataType, data: BufferSource, components: number, step: BufferSource, step_fast: BufferSource, format: StringSource, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igInputScalarN(cString(label), data_type, data, components, step, step_fast, cString(format), flags);
// }
// export function colorEdit3(label: StringSource, col: Float32Array, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorEdit3(cString(label), col, flags);
// }
// export function colorEdit4(label: StringSource, col: Float32Array, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorEdit4(cString(label), col, flags);
// }
// export function colorPicker3(label: StringSource, col: Float32Array, flags: ImGuiColorEditFlags): boolean {
//   return imgui.igColorPicker3(cString(label), col, flags);
// }
// export function colorPicker4(label: StringSource, col: Float32Array, flags: ImGuiColorEditFlags, ref_col: Float32Array): boolean {
//   return imgui.igColorPicker4(cString(label), col, flags, ref_col);
// }
// export function colorButton(desc_id: StringSource, col: ImVec4, flags: ImGuiColorEditFlags, size: ImVec2): boolean {
//   return imgui.igColorButton(cString(desc_id), col[BUFFER], flags, size[BUFFER]);
// }
// export function setColorEditOptions(flags: ImGuiColorEditFlags): void {
//    imgui.igSetColorEditOptions(flags);
// }
// export function treeNode_Str(label: StringSource): boolean {
//   return imgui.igTreeNode_Str(cString(label));
// }
// export function treeNode_StrStr(str_id: StringSource, fmt: StringSource): boolean {
//   return imgui.igTreeNode_StrStr(cString(str_id), cString(fmt));
// }
// export function treeNode_Ptr(ptr_id: BufferSource, fmt: StringSource): boolean {
//   return imgui.igTreeNode_Ptr(ptr_id, cString(fmt));
// }
// export function treeNodeV_Str(str_id: StringSource, fmt: StringSource): boolean {
//   return imgui.igTreeNodeV_Str(cString(str_id), cString(fmt));
// }
// export function treeNodeV_Ptr(ptr_id: BufferSource, fmt: StringSource): boolean {
//   return imgui.igTreeNodeV_Ptr(ptr_id, cString(fmt));
// }
// export function treeNodeEx_Str(label: StringSource, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igTreeNodeEx_Str(cString(label), flags);
// }
// export function treeNodeEx_StrStr(str_id: StringSource, flags: ImGuiTreeNodeFlags, fmt: StringSource): boolean {
//   return imgui.igTreeNodeEx_StrStr(cString(str_id), flags, cString(fmt));
// }
// export function treeNodeEx_Ptr(ptr_id: BufferSource, flags: ImGuiTreeNodeFlags, fmt: StringSource): boolean {
//   return imgui.igTreeNodeEx_Ptr(ptr_id, flags, cString(fmt));
// }
// export function treeNodeExV_Str(str_id: StringSource, flags: ImGuiTreeNodeFlags, fmt: StringSource): boolean {
//   return imgui.igTreeNodeExV_Str(cString(str_id), flags, cString(fmt));
// }
// export function treeNodeExV_Ptr(ptr_id: BufferSource, flags: ImGuiTreeNodeFlags, fmt: StringSource): boolean {
//   return imgui.igTreeNodeExV_Ptr(ptr_id, flags, cString(fmt));
// }
// export function treePush_Str(str_id: StringSource): void {
//    imgui.igTreePush_Str(cString(str_id));
// }
// export function treePush_Ptr(ptr_id: BufferSource): void {
//    imgui.igTreePush_Ptr(ptr_id);
// }
// export function treePop(): void {
//    imgui.igTreePop();
// }
// export function getTreeNodeToLabelSpacing(): number {
//   return imgui.igGetTreeNodeToLabelSpacing();
// }
// export function collapsingHeader_TreeNodeFlags(label: StringSource, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igCollapsingHeader_TreeNodeFlags(cString(label), flags);
// }
// export function collapsingHeader_BoolPtr(label: StringSource, visible?: Uint8Array, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igCollapsingHeader_BoolPtr(cString(label), visible ?? null, flags);
// }
// export function setNextItemOpen(is_open: boolean, cond: ImGuiCond): void {
//    imgui.igSetNextItemOpen(is_open, cond);
// }
// export function selectable_Bool(label: StringSource, selected: boolean, flags: ImGuiSelectableFlags, size: ImVec2): boolean {
//   return imgui.igSelectable_Bool(cString(label), selected, flags, size[BUFFER]);
// }
// export function selectable_BoolPtr(label: StringSource, selected?: Uint8Array, flags: ImGuiSelectableFlags, size: ImVec2): boolean {
//   return imgui.igSelectable_BoolPtr(cString(label), selected ?? null, flags, size[BUFFER]);
// }
// export function beginListBox(label: StringSource, size: ImVec2): boolean {
//   return imgui.igBeginListBox(cString(label), size[BUFFER]);
// }
// export function endListBox(): void {
//    imgui.igEndListBox();
// }
// export function listBox_Str_arr(label: StringSource, current_item: Int32Array, items: char[], items_count: number, height_in_items: number): boolean {
//   return imgui.igListBox_Str_arr(cString(label), current_item, items, items_count, height_in_items);
// }
// export function listBox_FnBoolPtr(label: StringSource, current_item: Int32Array, data: Deno.UnsafeCallback, idx: number, out_text): Deno.UnsafeCallback, data: BufferSource, items_count: number, height_in_items: number): boolean {
//   return imgui.igListBox_FnBoolPtr(cString(label), current_item, data, idx, out_text), data, items_count, height_in_items);
// }
// export function plotLines_FloatPtr(label: StringSource, values: Float32Array, values_count: number, values_offset: number, overlay_text: StringSource, scale_min: number, scale_max: number, graph_size: ImVec2, stride: number): void {
//    imgui.igPlotLines_FloatPtr(cString(label), values, values_count, values_offset, cString(overlay_text), scale_min, scale_max, graph_size[BUFFER], stride);
// }
// export function plotLines_FnFloatPtr(label: StringSource, data: Deno.UnsafeCallback, idx): number, data: BufferSource, values_count: number, values_offset: number, overlay_text: StringSource, scale_min: number, scale_max: number, graph_size: ImVec2): void {
//    imgui.igPlotLines_FnFloatPtr(cString(label), data, idx), data, values_count, values_offset, cString(overlay_text), scale_min, scale_max, graph_size[BUFFER]);
// }
// export function plotHistogram_FloatPtr(label: StringSource, values: Float32Array, values_count: number, values_offset: number, overlay_text: StringSource, scale_min: number, scale_max: number, graph_size: ImVec2, stride: number): void {
//    imgui.igPlotHistogram_FloatPtr(cString(label), values, values_count, values_offset, cString(overlay_text), scale_min, scale_max, graph_size[BUFFER], stride);
// }
// export function plotHistogram_FnFloatPtr(label: StringSource, data: Deno.UnsafeCallback, idx): number, data: BufferSource, values_count: number, values_offset: number, overlay_text: StringSource, scale_min: number, scale_max: number, graph_size: ImVec2): void {
//    imgui.igPlotHistogram_FnFloatPtr(cString(label), data, idx), data, values_count, values_offset, cString(overlay_text), scale_min, scale_max, graph_size[BUFFER]);
// }
// export function value_Bool(prefix: StringSource, b: boolean): void {
//    imgui.igValue_Bool(cString(prefix), b);
// }
// export function value_Int(prefix: StringSource, v: number): void {
//    imgui.igValue_Int(cString(prefix), v);
// }
// export function value_Uint(prefix: StringSource, v: number): void {
//    imgui.igValue_Uint(cString(prefix), v);
// }
// export function value_Float(prefix: StringSource, v: number, float_format: StringSource): void {
//    imgui.igValue_Float(cString(prefix), v, cString(float_format));
// }
// export function beginMenuBar(): boolean {
//   return imgui.igBeginMenuBar();
// }
// export function endMenuBar(): void {
//    imgui.igEndMenuBar();
// }
// export function beginMainMenuBar(): boolean {
//   return imgui.igBeginMainMenuBar();
// }
// export function endMainMenuBar(): void {
//    imgui.igEndMainMenuBar();
// }
// export function beginMenu(label: StringSource, enabled: boolean): boolean {
//   return imgui.igBeginMenu(cString(label), enabled);
// }
// export function endMenu(): void {
//    imgui.igEndMenu();
// }
// export function menuItem_Bool(label: StringSource, shortcut: StringSource, selected: boolean, enabled: boolean): boolean {
//   return imgui.igMenuItem_Bool(cString(label), cString(shortcut), selected, enabled);
// }
// export function menuItem_BoolPtr(label: StringSource, shortcut: StringSource, selected?: Uint8Array, enabled: boolean): boolean {
//   return imgui.igMenuItem_BoolPtr(cString(label), cString(shortcut), selected ?? null, enabled);
// }
// export function beginTooltip(): void {
//    imgui.igBeginTooltip();
// }
// export function endTooltip(): void {
//    imgui.igEndTooltip();
// }
// export function setTooltip(fmt: StringSource): void {
//    imgui.igSetTooltip(cString(fmt));
// }
// export function setTooltipV(fmt: StringSource): void {
//    imgui.igSetTooltipV(cString(fmt));
// }
// export function beginPopup(str_id: StringSource, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginPopup(cString(str_id), flags);
// }
// export function beginPopupModal(name: StringSource, open?: Uint8Array, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginPopupModal(cString(name), open ?? null, flags);
// }
// export function endPopup(): void {
//    imgui.igEndPopup();
// }
// export function openPopup_Str(str_id: StringSource, popup_flags: ImGuiPopupFlags): void {
//    imgui.igOpenPopup_Str(cString(str_id), popup_flags);
// }
// export function openPopup_ID(id: ImGuiID, popup_flags: ImGuiPopupFlags): void {
//    imgui.igOpenPopup_ID(id, popup_flags);
// }
// export function openPopupOnItemClick(str_id: StringSource, popup_flags: ImGuiPopupFlags): void {
//    imgui.igOpenPopupOnItemClick(cString(str_id), popup_flags);
// }
// export function closeCurrentPopup(): void {
//    imgui.igCloseCurrentPopup();
// }
// export function beginPopupContextItem(str_id: StringSource, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextItem(cString(str_id), popup_flags);
// }
// export function beginPopupContextWindow(str_id: StringSource, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextWindow(cString(str_id), popup_flags);
// }
// export function beginPopupContextVoid(str_id: StringSource, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igBeginPopupContextVoid(cString(str_id), popup_flags);
// }
// export function isPopupOpen_Str(str_id: StringSource, flags: ImGuiPopupFlags): boolean {
//   return imgui.igIsPopupOpen_Str(cString(str_id), flags);
// }
// export function beginTable(str_id: StringSource, column: number, flags: ImGuiTableFlags, outer_size: ImVec2, inner_width: number): boolean {
//   return imgui.igBeginTable(cString(str_id), column, flags, outer_size[BUFFER], inner_width);
// }
// export function endTable(): void {
//    imgui.igEndTable();
// }
// export function tableNextRow(row_flags: ImGuiTableRowFlags, min_row_height: number): void {
//    imgui.igTableNextRow(row_flags, min_row_height);
// }
// export function tableNextColumn(): boolean {
//   return imgui.igTableNextColumn();
// }
// export function tableSetColumnIndex(column_n: number): boolean {
//   return imgui.igTableSetColumnIndex(column_n);
// }
// export function tableSetupColumn(label: StringSource, flags: ImGuiTableColumnFlags, init_width_or_weight: number, user_id: ImGuiID): void {
//    imgui.igTableSetupColumn(cString(label), flags, init_width_or_weight, user_id);
// }
// export function tableSetupScrollFreeze(cols: number, rows: number): void {
//    imgui.igTableSetupScrollFreeze(cols, rows);
// }
// export function tableHeadersRow(): void {
//    imgui.igTableHeadersRow();
// }
// export function tableHeader(label: StringSource): void {
//    imgui.igTableHeader(cString(label));
// }
// export function tableGetSortSpecs(): ImGuiTableSortSpecs {
//   return imgui.igTableGetSortSpecs();
// }
// export function tableGetColumnCount(): number {
//   return imgui.igTableGetColumnCount();
// }
// export function tableGetColumnIndex(): number {
//   return imgui.igTableGetColumnIndex();
// }
// export function tableGetRowIndex(): number {
//   return imgui.igTableGetRowIndex();
// }
// export function tableGetColumnName_Int(column_n: number): string {
//   return imgui.igTableGetColumnName_Int(column_n);
// }
// export function tableGetColumnFlags(column_n: number): ImGuiTableColumnFlags {
//   return imgui.igTableGetColumnFlags(column_n);
// }
// export function tableSetColumnEnabled(column_n: number, v: boolean): void {
//    imgui.igTableSetColumnEnabled(column_n, v);
// }
// export function tableSetBgColor(target: ImGuiTableBgTarget, color: ImU32, column_n: number): void {
//    imgui.igTableSetBgColor(target, color, column_n);
// }
// export function columns(count: number, id: StringSource, border: boolean): void {
//    imgui.igColumns(count, cString(id), border);
// }
// export function nextColumn(): void {
//    imgui.igNextColumn();
// }
// export function getColumnIndex(): number {
//   return imgui.igGetColumnIndex();
// }
// export function getColumnWidth(column_index: number): number {
//   return imgui.igGetColumnWidth(column_index);
// }
// export function setColumnWidth(column_index: number, width: number): void {
//    imgui.igSetColumnWidth(column_index, width);
// }
// export function getColumnOffset(column_index: number): number {
//   return imgui.igGetColumnOffset(column_index);
// }
// export function setColumnOffset(column_index: number, offset_x: number): void {
//    imgui.igSetColumnOffset(column_index, offset_x);
// }
// export function getColumnsCount(): number {
//   return imgui.igGetColumnsCount();
// }
// export function beginTabBar(str_id: StringSource, flags: ImGuiTabBarFlags): boolean {
//   return imgui.igBeginTabBar(cString(str_id), flags);
// }
// export function endTabBar(): void {
//    imgui.igEndTabBar();
// }
// export function beginTabItem(label: StringSource, open?: Uint8Array, flags: ImGuiTabItemFlags): boolean {
//   return imgui.igBeginTabItem(cString(label), open ?? null, flags);
// }
// export function endTabItem(): void {
//    imgui.igEndTabItem();
// }
// export function tabItemButton(label: StringSource, flags: ImGuiTabItemFlags): boolean {
//   return imgui.igTabItemButton(cString(label), flags);
// }
// export function setTabItemClosed(tab_or_docked_window_label: StringSource): void {
//    imgui.igSetTabItemClosed(cString(tab_or_docked_window_label));
// }
// export function dockSpace(id: ImGuiID, size: ImVec2, flags: ImGuiDockNodeFlags, window_class: ImGuiWindowClass): ImGuiID {
//   return imgui.igDockSpace(id, size[BUFFER], flags, window_class);
// }
// export function dockSpaceOverViewport(viewport: ImGuiViewport, flags: ImGuiDockNodeFlags, window_class: ImGuiWindowClass): ImGuiID {
//   return imgui.igDockSpaceOverViewport(viewport, flags, window_class);
// }
// export function setNextWindowDockID(dock_id: ImGuiID, cond: ImGuiCond): void {
//    imgui.igSetNextWindowDockID(dock_id, cond);
// }
// export function setNextWindowClass(window_class: ImGuiWindowClass): void {
//    imgui.igSetNextWindowClass(window_class);
// }
// export function getWindowDockID(): ImGuiID {
//   return imgui.igGetWindowDockID();
// }
// export function isWindowDocked(): boolean {
//   return imgui.igIsWindowDocked();
// }
// export function logToTTY(auto_open_depth: number): void {
//    imgui.igLogToTTY(auto_open_depth);
// }
// export function logToClipboard(auto_open_depth: number): void {
//    imgui.igLogToClipboard(auto_open_depth);
// }
// export function logFinish(): void {
//    imgui.igLogFinish();
// }
// export function logButtons(): void {
//    imgui.igLogButtons();
// }
// export function logTextV(fmt: StringSource): void {
//    imgui.igLogTextV(cString(fmt));
// }
// export function beginDragDropSource(flags: ImGuiDragDropFlags): boolean {
//   return imgui.igBeginDragDropSource(flags);
// }
// export function setDragDropPayload(type: StringSource, data: BufferSource, sz: Deno.PointerValue, cond: ImGuiCond): boolean {
//   return imgui.igSetDragDropPayload(cString(type), data, sz, cond);
// }
// export function endDragDropSource(): void {
//    imgui.igEndDragDropSource();
// }
// export function beginDragDropTarget(): boolean {
//   return imgui.igBeginDragDropTarget();
// }
// export function acceptDragDropPayload(type: StringSource, flags: ImGuiDragDropFlags): ImGuiPayload {
//   return imgui.igAcceptDragDropPayload(cString(type), flags);
// }
// export function endDragDropTarget(): void {
//    imgui.igEndDragDropTarget();
// }
// export function getDragDropPayload(): ImGuiPayload {
//   return imgui.igGetDragDropPayload();
// }
// export function beginDisabled(disabled: boolean): void {
//    imgui.igBeginDisabled(disabled);
// }
// export function endDisabled(): void {
//    imgui.igEndDisabled();
// }
// export function pushClipRect(clip_rect_min: ImVec2, clip_rect_max: ImVec2, intersect_with_current_clip_rect: boolean): void {
//    imgui.igPushClipRect(clip_rect_min[BUFFER], clip_rect_max[BUFFER], intersect_with_current_clip_rect);
// }
// export function popClipRect(): void {
//    imgui.igPopClipRect();
// }
// export function setItemDefaultFocus(): void {
//    imgui.igSetItemDefaultFocus();
// }
// export function setKeyboardFocusHere(offset: number): void {
//    imgui.igSetKeyboardFocusHere(offset);
// }
// export function isItemHovered(flags: ImGuiHoveredFlags): boolean {
//   return imgui.igIsItemHovered(flags);
// }
// export function isItemActive(): boolean {
//   return imgui.igIsItemActive();
// }
// export function isItemFocused(): boolean {
//   return imgui.igIsItemFocused();
// }
// export function isItemClicked(mouse_button: ImGuiMouseButton): boolean {
//   return imgui.igIsItemClicked(mouse_button);
// }
// export function isItemVisible(): boolean {
//   return imgui.igIsItemVisible();
// }
// export function isItemEdited(): boolean {
//   return imgui.igIsItemEdited();
// }
// export function isItemActivated(): boolean {
//   return imgui.igIsItemActivated();
// }
// export function isItemDeactivated(): boolean {
//   return imgui.igIsItemDeactivated();
// }
// export function isItemDeactivatedAfterEdit(): boolean {
//   return imgui.igIsItemDeactivatedAfterEdit();
// }
// export function isItemToggledOpen(): boolean {
//   return imgui.igIsItemToggledOpen();
// }
// export function isAnyItemHovered(): boolean {
//   return imgui.igIsAnyItemHovered();
// }
// export function isAnyItemActive(): boolean {
//   return imgui.igIsAnyItemActive();
// }
// export function isAnyItemFocused(): boolean {
//   return imgui.igIsAnyItemFocused();
// }
// export function getItemID(): ImGuiID {
//   return imgui.igGetItemID();
// }
// export function getItemRectMin(pOut: ImVec2): void {
//    imgui.igGetItemRectMin(pOut);
// }
// export function getItemRectMax(pOut: ImVec2): void {
//    imgui.igGetItemRectMax(pOut);
// }
// export function getItemRectSize(pOut: ImVec2): void {
//    imgui.igGetItemRectSize(pOut);
// }
// export function setItemAllowOverlap(): void {
//    imgui.igSetItemAllowOverlap();
// }
// export function getMainViewport(): ImGuiViewport {
//   return imgui.igGetMainViewport();
// }
// export function getBackgroundDrawList_Nil(): ImDrawList {
//   return imgui.igGetBackgroundDrawList_Nil();
// }
// export function getForegroundDrawList_Nil(): ImDrawList {
//   return imgui.igGetForegroundDrawList_Nil();
// }
// export function getBackgroundDrawList_ViewportPtr(viewport: ImGuiViewport): ImDrawList {
//   return imgui.igGetBackgroundDrawList_ViewportPtr(viewport);
// }
// export function getForegroundDrawList_ViewportPtr(viewport: ImGuiViewport): ImDrawList {
//   return imgui.igGetForegroundDrawList_ViewportPtr(viewport);
// }
// export function isRectVisible_Nil(size: ImVec2): boolean {
//   return imgui.igIsRectVisible_Nil(size[BUFFER]);
// }
// export function isRectVisible_Vec2(rect_min: ImVec2, rect_max: ImVec2): boolean {
//   return imgui.igIsRectVisible_Vec2(rect_min[BUFFER], rect_max[BUFFER]);
// }
// export function getTime(): number {
//   return imgui.igGetTime();
// }
// export function getFrameCount(): number {
//   return imgui.igGetFrameCount();
// }
// export function getDrawListSharedData(): ImDrawListSharedData {
//   return imgui.igGetDrawListSharedData();
// }
// export function getStyleColorName(idx: ImGuiCol): string {
//   return imgui.igGetStyleColorName(idx);
// }
// export function setStateStorage(storage: ImGuiStorage): void {
//    imgui.igSetStateStorage(storage);
// }
// export function getStateStorage(): ImGuiStorage {
//   return imgui.igGetStateStorage();
// }
// export function beginChildFrame(id: ImGuiID, size: ImVec2, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChildFrame(id, size[BUFFER], flags);
// }
// export function endChildFrame(): void {
//    imgui.igEndChildFrame();
// }
// export function calcTextSize(pOut: ImVec2, text: StringSource, text_end: StringSource, hide_text_after_double_hash: boolean, wrap_width: number): void {
//    imgui.igCalcTextSize(pOut, cString(text), cString(text_end), hide_text_after_double_hash, wrap_width);
// }
// export function colorConvertU32ToFloat4(pOut: ImVec4, in: ImU32): void {
//    imgui.igColorConvertU32ToFloat4(pOut, in);
// }
// export function colorConvertFloat4ToU32(in: ImVec4): ImU32 {
//   return imgui.igColorConvertFloat4ToU32(in[BUFFER]);
// }
// export function colorConvertRGBtoHSV(r: number, g: number, b: number, out_h: Float32Array, out_s: Float32Array, out_v: Float32Array): void {
//    imgui.igColorConvertRGBtoHSV(r, g, b, out_h, out_s, out_v);
// }
// export function colorConvertHSVtoRGB(h: number, s: number, v: number, out_r: Float32Array, out_g: Float32Array, out_b: Float32Array): void {
//    imgui.igColorConvertHSVtoRGB(h, s, v, out_r, out_g, out_b);
// }
// export function isKeyDown_Nil(key: ImGuiKey): boolean {
//   return imgui.igIsKeyDown_Nil(key);
// }
// export function isKeyPressed_Bool(key: ImGuiKey, repeat: boolean): boolean {
//   return imgui.igIsKeyPressed_Bool(key, repeat);
// }
// export function isKeyReleased_Nil(key: ImGuiKey): boolean {
//   return imgui.igIsKeyReleased_Nil(key);
// }
// export function getKeyPressedAmount(key: ImGuiKey, repeat_delay: number, rate: number): number {
//   return imgui.igGetKeyPressedAmount(key, repeat_delay, rate);
// }
// export function getKeyName(key: ImGuiKey): string {
//   return imgui.igGetKeyName(key);
// }
// export function setNextFrameWantCaptureKeyboard(want_capture_keyboard: boolean): void {
//    imgui.igSetNextFrameWantCaptureKeyboard(want_capture_keyboard);
// }
// export function isMouseDown_Nil(button: ImGuiMouseButton): boolean {
//   return imgui.igIsMouseDown_Nil(button);
// }
// export function isMouseClicked_Bool(button: ImGuiMouseButton, repeat: boolean): boolean {
//   return imgui.igIsMouseClicked_Bool(button, repeat);
// }
// export function isMouseReleased_Nil(button: ImGuiMouseButton): boolean {
//   return imgui.igIsMouseReleased_Nil(button);
// }
// export function isMouseDoubleClicked(button: ImGuiMouseButton): boolean {
//   return imgui.igIsMouseDoubleClicked(button);
// }
// export function getMouseClickedCount(button: ImGuiMouseButton): number {
//   return imgui.igGetMouseClickedCount(button);
// }
// export function isMouseHoveringRect(r_min: ImVec2, r_max: ImVec2, clip: boolean): boolean {
//   return imgui.igIsMouseHoveringRect(r_min[BUFFER], r_max[BUFFER], clip);
// }
// export function isMousePosValid(mouse_pos: ImVec2): boolean {
//   return imgui.igIsMousePosValid(mouse_pos);
// }
// export function isAnyMouseDown(): boolean {
//   return imgui.igIsAnyMouseDown();
// }
// export function getMousePos(pOut: ImVec2): void {
//    imgui.igGetMousePos(pOut);
// }
// export function getMousePosOnOpeningCurrentPopup(pOut: ImVec2): void {
//    imgui.igGetMousePosOnOpeningCurrentPopup(pOut);
// }
// export function isMouseDragging(button: ImGuiMouseButton, lock_threshold: number): boolean {
//   return imgui.igIsMouseDragging(button, lock_threshold);
// }
// export function getMouseDragDelta(pOut: ImVec2, button: ImGuiMouseButton, lock_threshold: number): void {
//    imgui.igGetMouseDragDelta(pOut, button, lock_threshold);
// }
// export function resetMouseDragDelta(button: ImGuiMouseButton): void {
//    imgui.igResetMouseDragDelta(button);
// }
// export function getMouseCursor(): ImGuiMouseCursor {
//   return imgui.igGetMouseCursor();
// }
// export function setMouseCursor(cursor_type: ImGuiMouseCursor): void {
//    imgui.igSetMouseCursor(cursor_type);
// }
// export function setNextFrameWantCaptureMouse(want_capture_mouse: boolean): void {
//    imgui.igSetNextFrameWantCaptureMouse(want_capture_mouse);
// }
// export function getClipboardText(): string {
//   return imgui.igGetClipboardText();
// }
// export function setClipboardText(text: StringSource): void {
//    imgui.igSetClipboardText(cString(text));
// }
// export function loadIniSettingsFromDisk(ini_filename: StringSource): void {
//    imgui.igLoadIniSettingsFromDisk(cString(ini_filename));
// }
// export function loadIniSettingsFromMemory(ini_data: StringSource, ini_size: Deno.PointerValue): void {
//    imgui.igLoadIniSettingsFromMemory(cString(ini_data), ini_size);
// }
// export function saveIniSettingsToDisk(ini_filename: StringSource): void {
//    imgui.igSaveIniSettingsToDisk(cString(ini_filename));
// }
// export function saveIniSettingsToMemory(out_ini_size: size_t): string {
//   return imgui.igSaveIniSettingsToMemory(out_ini_size);
// }
// export function debugTextEncoding(text: StringSource): void {
//    imgui.igDebugTextEncoding(cString(text));
// }
// export function debugCheckVersionAndDataLayout(version_str: StringSource, sz_io: Deno.PointerValue, sz_style: Deno.PointerValue, sz_vec2: Deno.PointerValue, sz_vec4: Deno.PointerValue, sz_drawvert: Deno.PointerValue, sz_drawidx: Deno.PointerValue): boolean {
//   return imgui.igDebugCheckVersionAndDataLayout(cString(version_str), sz_io, sz_style, sz_vec2, sz_vec4, sz_drawvert, sz_drawidx);
// }
// export function memAlloc(size: Deno.PointerValue): BufferSource {
//   return imgui.igMemAlloc(size);
// }
// export function memFree(ptr: BufferSource): void {
//    imgui.igMemFree(ptr);
// }
// export function getPlatformIO(): ImGuiPlatformIO {
//   return imgui.igGetPlatformIO();
// }
// export function updatePlatformWindows(): void {
//    imgui.igUpdatePlatformWindows();
// }
// export function renderPlatformWindowsDefault(platform_render_arg: BufferSource, renderer_render_arg: BufferSource): void {
//    imgui.igRenderPlatformWindowsDefault(platform_render_arg, renderer_render_arg);
// }
// export function destroyPlatformWindows(): void {
//    imgui.igDestroyPlatformWindows();
// }
// export function findViewportByID(id: ImGuiID): ImGuiViewport {
//   return imgui.igFindViewportByID(id);
// }
// export function findViewportByPlatformHandle(platform_handle: BufferSource): ImGuiViewport {
//   return imgui.igFindViewportByPlatformHandle(platform_handle);
// }
// export function imGuiStyle_ImGuiStyle(): ImGuiStyle {
//   return imgui.ImGuiStyle_ImGuiStyle();
// }
// export function imGuiStyle_destroy(self: ImGuiStyle): void {
//    imgui.ImGuiStyle_destroy(self);
// }
// export function imGuiStyle_ScaleAllSizes(self: ImGuiStyle, scale_factor: number): void {
//    imgui.ImGuiStyle_ScaleAllSizes(self, scale_factor);
// }
// export function imGuiIO_AddKeyEvent(self: ImGuiIO, key: ImGuiKey, down: boolean): void {
//    imgui.ImGuiIO_AddKeyEvent(self, key, down);
// }
// export function imGuiIO_AddKeyAnalogEvent(self: ImGuiIO, key: ImGuiKey, down: boolean, v: number): void {
//    imgui.ImGuiIO_AddKeyAnalogEvent(self, key, down, v);
// }
// export function imGuiIO_AddMousePosEvent(self: ImGuiIO, x: number, y: number): void {
//    imgui.ImGuiIO_AddMousePosEvent(self, x, y);
// }
// export function imGuiIO_AddMouseButtonEvent(self: ImGuiIO, button: number, down: boolean): void {
//    imgui.ImGuiIO_AddMouseButtonEvent(self, button, down);
// }
// export function imGuiIO_AddMouseWheelEvent(self: ImGuiIO, wh_x: number, wh_y: number): void {
//    imgui.ImGuiIO_AddMouseWheelEvent(self, wh_x, wh_y);
// }
// export function imGuiIO_AddMouseViewportEvent(self: ImGuiIO, id: ImGuiID): void {
//    imgui.ImGuiIO_AddMouseViewportEvent(self, id);
// }
// export function imGuiIO_AddFocusEvent(self: ImGuiIO, focused: boolean): void {
//    imgui.ImGuiIO_AddFocusEvent(self, focused);
// }
// export function imGuiIO_AddInputCharacter(self: ImGuiIO, c: number): void {
//    imgui.ImGuiIO_AddInputCharacter(self, c);
// }
// export function imGuiIO_AddInputCharacterUTF16(self: ImGuiIO, c: ImWchar16): void {
//    imgui.ImGuiIO_AddInputCharacterUTF16(self, c);
// }
// export function imGuiIO_AddInputCharactersUTF8(self: ImGuiIO, str: StringSource): void {
//    imgui.ImGuiIO_AddInputCharactersUTF8(self, cString(str));
// }
// export function imGuiIO_SetKeyEventNativeData(self: ImGuiIO, key: ImGuiKey, native_keycode: number, native_scancode: number, native_legacy_index: number): void {
//    imgui.ImGuiIO_SetKeyEventNativeData(self, key, native_keycode, native_scancode, native_legacy_index);
// }
// export function imGuiIO_SetAppAcceptingEvents(self: ImGuiIO, accepting_events: boolean): void {
//    imgui.ImGuiIO_SetAppAcceptingEvents(self, accepting_events);
// }
// export function imGuiIO_ClearInputCharacters(self: ImGuiIO): void {
//    imgui.ImGuiIO_ClearInputCharacters(self);
// }
// export function imGuiIO_ClearInputKeys(self: ImGuiIO): void {
//    imgui.ImGuiIO_ClearInputKeys(self);
// }
// export function imGuiIO_ImGuiIO(): ImGuiIO {
//   return imgui.ImGuiIO_ImGuiIO();
// }
// export function imGuiIO_destroy(self: ImGuiIO): void {
//    imgui.ImGuiIO_destroy(self);
// }
// export function imGuiInputTextCallbackData_ImGuiInputTextCallbackData(): ImGuiInputTextCallbackData {
//   return imgui.ImGuiInputTextCallbackData_ImGuiInputTextCallbackData();
// }
// export function imGuiInputTextCallbackData_destroy(self: ImGuiInputTextCallbackData*): void {
//    imgui.ImGuiInputTextCallbackData_destroy(self.pointer);
// }
// export function imGuiInputTextCallbackData_DeleteChars(self: ImGuiInputTextCallbackData*, pos: number, bytes_count: number): void {
//    imgui.ImGuiInputTextCallbackData_DeleteChars(self.pointer, pos, bytes_count);
// }
// export function imGuiInputTextCallbackData_InsertChars(self: ImGuiInputTextCallbackData*, pos: number, text: StringSource, text_end: StringSource): void {
//    imgui.ImGuiInputTextCallbackData_InsertChars(self.pointer, pos, cString(text), cString(text_end));
// }
// export function imGuiInputTextCallbackData_SelectAll(self: ImGuiInputTextCallbackData*): void {
//    imgui.ImGuiInputTextCallbackData_SelectAll(self.pointer);
// }
// export function imGuiInputTextCallbackData_ClearSelection(self: ImGuiInputTextCallbackData*): void {
//    imgui.ImGuiInputTextCallbackData_ClearSelection(self.pointer);
// }
// export function imGuiInputTextCallbackData_HasSelection(self: ImGuiInputTextCallbackData*): boolean {
//   return imgui.ImGuiInputTextCallbackData_HasSelection(self.pointer);
// }
// export function imGuiWindowClass_ImGuiWindowClass(): ImGuiWindowClass {
//   return imgui.ImGuiWindowClass_ImGuiWindowClass();
// }
// export function imGuiWindowClass_destroy(self: ImGuiWindowClass): void {
//    imgui.ImGuiWindowClass_destroy(self);
// }
// export function imGuiPayload_ImGuiPayload(): ImGuiPayload {
//   return imgui.ImGuiPayload_ImGuiPayload();
// }
// export function imGuiPayload_destroy(self: ImGuiPayload): void {
//    imgui.ImGuiPayload_destroy(self);
// }
// export function imGuiPayload_Clear(self: ImGuiPayload): void {
//    imgui.ImGuiPayload_Clear(self);
// }
// export function imGuiPayload_IsDataType(self: ImGuiPayload, type: StringSource): boolean {
//   return imgui.ImGuiPayload_IsDataType(self, cString(type));
// }
// export function imGuiPayload_IsPreview(self: ImGuiPayload): boolean {
//   return imgui.ImGuiPayload_IsPreview(self);
// }
// export function imGuiPayload_IsDelivery(self: ImGuiPayload): boolean {
//   return imgui.ImGuiPayload_IsDelivery(self);
// }
// export function imGuiTableColumnSortSpecs_ImGuiTableColumnSortSpecs(): ImGuiTableColumnSortSpecs {
//   return imgui.ImGuiTableColumnSortSpecs_ImGuiTableColumnSortSpecs();
// }
// export function imGuiTableColumnSortSpecs_destroy(self: ImGuiTableColumnSortSpecs): void {
//    imgui.ImGuiTableColumnSortSpecs_destroy(self);
// }
// export function imGuiTableSortSpecs_ImGuiTableSortSpecs(): ImGuiTableSortSpecs {
//   return imgui.ImGuiTableSortSpecs_ImGuiTableSortSpecs();
// }
// export function imGuiTableSortSpecs_destroy(self: ImGuiTableSortSpecs): void {
//    imgui.ImGuiTableSortSpecs_destroy(self);
// }
// export function imGuiOnceUponAFrame_ImGuiOnceUponAFrame(): ImGuiOnceUponAFrame {
//   return imgui.ImGuiOnceUponAFrame_ImGuiOnceUponAFrame();
// }
// export function imGuiOnceUponAFrame_destroy(self: ImGuiOnceUponAFrame): void {
//    imgui.ImGuiOnceUponAFrame_destroy(self);
// }
// export function imGuiTextFilter_ImGuiTextFilter(default_filter: StringSource): ImGuiTextFilter {
//   return imgui.ImGuiTextFilter_ImGuiTextFilter(cString(default_filter));
// }
// export function imGuiTextFilter_destroy(self: ImGuiTextFilter): void {
//    imgui.ImGuiTextFilter_destroy(self);
// }
// export function imGuiTextFilter_Draw(self: ImGuiTextFilter, label: StringSource, width: number): boolean {
//   return imgui.ImGuiTextFilter_Draw(self, cString(label), width);
// }
// export function imGuiTextFilter_PassFilter(self: ImGuiTextFilter, text: StringSource, text_end: StringSource): boolean {
//   return imgui.ImGuiTextFilter_PassFilter(self, cString(text), cString(text_end));
// }
// export function imGuiTextFilter_Build(self: ImGuiTextFilter): void {
//    imgui.ImGuiTextFilter_Build(self);
// }
// export function imGuiTextFilter_Clear(self: ImGuiTextFilter): void {
//    imgui.ImGuiTextFilter_Clear(self);
// }
// export function imGuiTextFilter_IsActive(self: ImGuiTextFilter): boolean {
//   return imgui.ImGuiTextFilter_IsActive(self);
// }
// export function imGuiTextRange_ImGuiTextRange_Nil(): ImGuiTextRange {
//   return imgui.ImGuiTextRange_ImGuiTextRange_Nil();
// }
// export function imGuiTextRange_destroy(self: ImGuiTextRange): void {
//    imgui.ImGuiTextRange_destroy(self);
// }
// export function imGuiTextRange_ImGuiTextRange_Str(_b: StringSource, _e: StringSource): ImGuiTextRange {
//   return imgui.ImGuiTextRange_ImGuiTextRange_Str(cString(_b), cString(_e));
// }
// export function imGuiTextRange_empty(self: ImGuiTextRange): boolean {
//   return imgui.ImGuiTextRange_empty(self);
// }
// export function imGuiTextRange_split(self: ImGuiTextRange, separator: number, out: ImVector_ImGuiTextRange): void {
//    imgui.ImGuiTextRange_split(self, separator, out);
// }
// export function imGuiTextBuffer_ImGuiTextBuffer(): ImGuiTextBuffer {
//   return imgui.ImGuiTextBuffer_ImGuiTextBuffer();
// }
// export function imGuiTextBuffer_destroy(self: ImGuiTextBuffer): void {
//    imgui.ImGuiTextBuffer_destroy(self);
// }
// export function imGuiTextBuffer_begin(self: ImGuiTextBuffer): string {
//   return imgui.ImGuiTextBuffer_begin(self);
// }
// export function imGuiTextBuffer_end(self: ImGuiTextBuffer): string {
//   return imgui.ImGuiTextBuffer_end(self);
// }
// export function imGuiTextBuffer_size(self: ImGuiTextBuffer): number {
//   return imgui.ImGuiTextBuffer_size(self);
// }
// export function imGuiTextBuffer_empty(self: ImGuiTextBuffer): boolean {
//   return imgui.ImGuiTextBuffer_empty(self);
// }
// export function imGuiTextBuffer_clear(self: ImGuiTextBuffer): void {
//    imgui.ImGuiTextBuffer_clear(self);
// }
// export function imGuiTextBuffer_reserve(self: ImGuiTextBuffer, capacity: number): void {
//    imgui.ImGuiTextBuffer_reserve(self, capacity);
// }
// export function imGuiTextBuffer_c_str(self: ImGuiTextBuffer): string {
//   return imgui.ImGuiTextBuffer_c_str(self);
// }
// export function imGuiTextBuffer_append(self: ImGuiTextBuffer, str: StringSource, str_end: StringSource): void {
//    imgui.ImGuiTextBuffer_append(self, cString(str), cString(str_end));
// }
// export function imGuiTextBuffer_appendfv(self: ImGuiTextBuffer, fmt: StringSource): void {
//    imgui.ImGuiTextBuffer_appendfv(self, cString(fmt));
// }
// export function imGuiStoragePair_ImGuiStoragePair_Int(_key: ImGuiID, _val_i: number): ImGuiStoragePair {
//   return imgui.ImGuiStoragePair_ImGuiStoragePair_Int(_key, _val_i);
// }
// export function imGuiStoragePair_destroy(self: ImGuiStoragePair): void {
//    imgui.ImGuiStoragePair_destroy(self);
// }
// export function imGuiStoragePair_ImGuiStoragePair_Float(_key: ImGuiID, _val_f: number): ImGuiStoragePair {
//   return imgui.ImGuiStoragePair_ImGuiStoragePair_Float(_key, _val_f);
// }
// export function imGuiStoragePair_ImGuiStoragePair_Ptr(_key: ImGuiID, _val_p: BufferSource): ImGuiStoragePair {
//   return imgui.ImGuiStoragePair_ImGuiStoragePair_Ptr(_key, _val_p);
// }
// export function imGuiStorage_Clear(self: ImGuiStorage): void {
//    imgui.ImGuiStorage_Clear(self);
// }
// export function imGuiStorage_GetInt(self: ImGuiStorage, key: ImGuiID, default_val: number): number {
//   return imgui.ImGuiStorage_GetInt(self, key, default_val);
// }
// export function imGuiStorage_SetInt(self: ImGuiStorage, key: ImGuiID, val: number): void {
//    imgui.ImGuiStorage_SetInt(self, key, val);
// }
// export function imGuiStorage_GetBool(self: ImGuiStorage, key: ImGuiID, default_val: boolean): boolean {
//   return imgui.ImGuiStorage_GetBool(self, key, default_val);
// }
// export function imGuiStorage_SetBool(self: ImGuiStorage, key: ImGuiID, val: boolean): void {
//    imgui.ImGuiStorage_SetBool(self, key, val);
// }
// export function imGuiStorage_GetFloat(self: ImGuiStorage, key: ImGuiID, default_val: number): number {
//   return imgui.ImGuiStorage_GetFloat(self, key, default_val);
// }
// export function imGuiStorage_SetFloat(self: ImGuiStorage, key: ImGuiID, val: number): void {
//    imgui.ImGuiStorage_SetFloat(self, key, val);
// }
// export function imGuiStorage_GetVoidPtr(self: ImGuiStorage, key: ImGuiID): BufferSource {
//   return imgui.ImGuiStorage_GetVoidPtr(self, key);
// }
// export function imGuiStorage_SetVoidPtr(self: ImGuiStorage, key: ImGuiID, val: BufferSource): void {
//    imgui.ImGuiStorage_SetVoidPtr(self, key, val);
// }
// export function imGuiStorage_GetIntRef(self: ImGuiStorage, key: ImGuiID, default_val: number): int {
//   return imgui.ImGuiStorage_GetIntRef(self, key, default_val);
// }
// export function imGuiStorage_GetBoolRef(self: ImGuiStorage, key: ImGuiID, default_val: boolean): bool {
//   return imgui.ImGuiStorage_GetBoolRef(self, key, default_val);
// }
// export function imGuiStorage_GetFloatRef(self: ImGuiStorage, key: ImGuiID, default_val: number): float {
//   return imgui.ImGuiStorage_GetFloatRef(self, key, default_val);
// }
// export function imGuiStorage_GetVoidPtrRef(self: ImGuiStorage, key: ImGuiID, default_val: BufferSource): Deno.UnsafeCallback {
//   return imgui.ImGuiStorage_GetVoidPtrRef(self, key, default_val);
// }
// export function imGuiStorage_SetAllInt(self: ImGuiStorage, val: number): void {
//    imgui.ImGuiStorage_SetAllInt(self, val);
// }
// export function imGuiStorage_BuildSortByKey(self: ImGuiStorage): void {
//    imgui.ImGuiStorage_BuildSortByKey(self);
// }
// export function imGuiListClipper_ImGuiListClipper(): ImGuiListClipper {
//   return imgui.ImGuiListClipper_ImGuiListClipper();
// }
// export function imGuiListClipper_destroy(self: ImGuiListClipper): void {
//    imgui.ImGuiListClipper_destroy(self);
// }
// export function imGuiListClipper_Begin(self: ImGuiListClipper, items_count: number, items_height: number): void {
//    imgui.ImGuiListClipper_Begin(self, items_count, items_height);
// }
// export function imGuiListClipper_End(self: ImGuiListClipper): void {
//    imgui.ImGuiListClipper_End(self);
// }
// export function imGuiListClipper_Step(self: ImGuiListClipper): boolean {
//   return imgui.ImGuiListClipper_Step(self);
// }
// export function imGuiListClipper_ForceDisplayRangeByIndices(self: ImGuiListClipper, item_min: number, item_max: number): void {
//    imgui.ImGuiListClipper_ForceDisplayRangeByIndices(self, item_min, item_max);
// }
// export function imColor_ImColor_Nil(): ImColor {
//   return imgui.ImColor_ImColor_Nil();
// }
// export function imColor_destroy(self: ImColor): void {
//    imgui.ImColor_destroy(self);
// }
// export function imColor_ImColor_Float(r: number, g: number, b: number, a: number): ImColor {
//   return imgui.ImColor_ImColor_Float(r, g, b, a);
// }
// export function imColor_ImColor_Vec4(col: ImVec4): ImColor {
//   return imgui.ImColor_ImColor_Vec4(col[BUFFER]);
// }
// export function imColor_ImColor_Int(r: number, g: number, b: number, a: number): ImColor {
//   return imgui.ImColor_ImColor_Int(r, g, b, a);
// }
// export function imColor_ImColor_U32(rgba: ImU32): ImColor {
//   return imgui.ImColor_ImColor_U32(rgba);
// }
// export function imColor_SetHSV(self: ImColor, h: number, s: number, v: number, a: number): void {
//    imgui.ImColor_SetHSV(self, h, s, v, a);
// }
// export function imColor_HSV(pOut: ImColor, h: number, s: number, v: number, a: number): void {
//    imgui.ImColor_HSV(pOut, h, s, v, a);
// }
// export function imDrawCmd_ImDrawCmd(): ImDrawCmd {
//   return imgui.ImDrawCmd_ImDrawCmd();
// }
// export function imDrawCmd_destroy(self: ImDrawCmd): void {
//    imgui.ImDrawCmd_destroy(self);
// }
// export function imDrawCmd_GetTexID(self: ImDrawCmd): ImTextureID {
//   return imgui.ImDrawCmd_GetTexID(self);
// }
// export function imDrawListSplitter_ImDrawListSplitter(): ImDrawListSplitter {
//   return imgui.ImDrawListSplitter_ImDrawListSplitter();
// }
// export function imDrawListSplitter_destroy(self: ImDrawListSplitter): void {
//    imgui.ImDrawListSplitter_destroy(self);
// }
// export function imDrawListSplitter_Clear(self: ImDrawListSplitter): void {
//    imgui.ImDrawListSplitter_Clear(self);
// }
// export function imDrawListSplitter_ClearFreeMemory(self: ImDrawListSplitter): void {
//    imgui.ImDrawListSplitter_ClearFreeMemory(self);
// }
// export function imDrawListSplitter_Split(self: ImDrawListSplitter, draw_list: ImDrawList, count: number): void {
//    imgui.ImDrawListSplitter_Split(self, draw_list, count);
// }
// export function imDrawListSplitter_Merge(self: ImDrawListSplitter, draw_list: ImDrawList): void {
//    imgui.ImDrawListSplitter_Merge(self, draw_list);
// }
// export function imDrawListSplitter_SetCurrentChannel(self: ImDrawListSplitter, draw_list: ImDrawList, channel_idx: number): void {
//    imgui.ImDrawListSplitter_SetCurrentChannel(self, draw_list, channel_idx);
// }
// export function imDrawList_ImDrawList(shared_data: ImDrawListSharedData): ImDrawList {
//   return imgui.ImDrawList_ImDrawList(shared_data);
// }
// export function imDrawList_destroy(self: ImDrawList): void {
//    imgui.ImDrawList_destroy(self);
// }
// export function imDrawList_PushClipRect(self: ImDrawList, clip_rect_min: ImVec2, clip_rect_max: ImVec2, intersect_with_current_clip_rect: boolean): void {
//    imgui.ImDrawList_PushClipRect(self, clip_rect_min[BUFFER], clip_rect_max[BUFFER], intersect_with_current_clip_rect);
// }
// export function imDrawList_PushClipRectFullScreen(self: ImDrawList): void {
//    imgui.ImDrawList_PushClipRectFullScreen(self);
// }
// export function imDrawList_PopClipRect(self: ImDrawList): void {
//    imgui.ImDrawList_PopClipRect(self);
// }
// export function imDrawList_PushTextureID(self: ImDrawList, texture_id: ImTextureID): void {
//    imgui.ImDrawList_PushTextureID(self, texture_id);
// }
// export function imDrawList_PopTextureID(self: ImDrawList): void {
//    imgui.ImDrawList_PopTextureID(self);
// }
// export function imDrawList_GetClipRectMin(pOut: ImVec2, self: ImDrawList): void {
//    imgui.ImDrawList_GetClipRectMin(pOut, self);
// }
// export function imDrawList_GetClipRectMax(pOut: ImVec2, self: ImDrawList): void {
//    imgui.ImDrawList_GetClipRectMax(pOut, self);
// }
// export function imDrawList_AddLine(self: ImDrawList, p1: ImVec2, p2: ImVec2, col: ImU32, thickness: number): void {
//    imgui.ImDrawList_AddLine(self, p1[BUFFER], p2[BUFFER], col, thickness);
// }
// export function imDrawList_AddRect(self: ImDrawList, min: ImVec2, max: ImVec2, col: ImU32, rounding: number, flags: ImDrawFlags, thickness: number): void {
//    imgui.ImDrawList_AddRect(self, min[BUFFER], max[BUFFER], col, rounding, flags, thickness);
// }
// export function imDrawList_AddRectFilled(self: ImDrawList, min: ImVec2, max: ImVec2, col: ImU32, rounding: number, flags: ImDrawFlags): void {
//    imgui.ImDrawList_AddRectFilled(self, min[BUFFER], max[BUFFER], col, rounding, flags);
// }
// export function imDrawList_AddRectFilledMultiColor(self: ImDrawList, min: ImVec2, max: ImVec2, col_upr_left: ImU32, col_upr_right: ImU32, col_bot_right: ImU32, col_bot_left: ImU32): void {
//    imgui.ImDrawList_AddRectFilledMultiColor(self, min[BUFFER], max[BUFFER], col_upr_left, col_upr_right, col_bot_right, col_bot_left);
// }
// export function imDrawList_AddQuad(self: ImDrawList, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, col: ImU32, thickness: number): void {
//    imgui.ImDrawList_AddQuad(self, p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], col, thickness);
// }
// export function imDrawList_AddQuadFilled(self: ImDrawList, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_AddQuadFilled(self, p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], col);
// }
// export function imDrawList_AddTriangle(self: ImDrawList, p1: ImVec2, p2: ImVec2, p3: ImVec2, col: ImU32, thickness: number): void {
//    imgui.ImDrawList_AddTriangle(self, p1[BUFFER], p2[BUFFER], p3[BUFFER], col, thickness);
// }
// export function imDrawList_AddTriangleFilled(self: ImDrawList, p1: ImVec2, p2: ImVec2, p3: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_AddTriangleFilled(self, p1[BUFFER], p2[BUFFER], p3[BUFFER], col);
// }
// export function imDrawList_AddCircle(self: ImDrawList, center: ImVec2, radius: number, col: ImU32, num_segments: number, thickness: number): void {
//    imgui.ImDrawList_AddCircle(self, center[BUFFER], radius, col, num_segments, thickness);
// }
// export function imDrawList_AddCircleFilled(self: ImDrawList, center: ImVec2, radius: number, col: ImU32, num_segments: number): void {
//    imgui.ImDrawList_AddCircleFilled(self, center[BUFFER], radius, col, num_segments);
// }
// export function imDrawList_AddNgon(self: ImDrawList, center: ImVec2, radius: number, col: ImU32, num_segments: number, thickness: number): void {
//    imgui.ImDrawList_AddNgon(self, center[BUFFER], radius, col, num_segments, thickness);
// }
// export function imDrawList_AddNgonFilled(self: ImDrawList, center: ImVec2, radius: number, col: ImU32, num_segments: number): void {
//    imgui.ImDrawList_AddNgonFilled(self, center[BUFFER], radius, col, num_segments);
// }
// export function imDrawList_AddText_Vec2(self: ImDrawList, pos: ImVec2, col: ImU32, text_begin: StringSource, text_end: StringSource): void {
//    imgui.ImDrawList_AddText_Vec2(self, pos[BUFFER], col, cString(text_begin), cString(text_end));
// }
// export function imDrawList_AddText_FontPtr(self: ImDrawList, font: ImFont, font_size: number, pos: ImVec2, col: ImU32, text_begin: StringSource, text_end: StringSource, wrap_width: number, cpu_fine_clip_rect: ImVec4): void {
//    imgui.ImDrawList_AddText_FontPtr(self, font, font_size, pos[BUFFER], col, cString(text_begin), cString(text_end), wrap_width, cpu_fine_clip_rect);
// }
// export function imDrawList_AddPolyline(self: ImDrawList, points: ImVec2, num_points: number, col: ImU32, flags: ImDrawFlags, thickness: number): void {
//    imgui.ImDrawList_AddPolyline(self, points, num_points, col, flags, thickness);
// }
// export function imDrawList_AddConvexPolyFilled(self: ImDrawList, points: ImVec2, num_points: number, col: ImU32): void {
//    imgui.ImDrawList_AddConvexPolyFilled(self, points, num_points, col);
// }
// export function imDrawList_AddBezierCubic(self: ImDrawList, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, col: ImU32, thickness: number, num_segments: number): void {
//    imgui.ImDrawList_AddBezierCubic(self, p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], col, thickness, num_segments);
// }
// export function imDrawList_AddBezierQuadratic(self: ImDrawList, p1: ImVec2, p2: ImVec2, p3: ImVec2, col: ImU32, thickness: number, num_segments: number): void {
//    imgui.ImDrawList_AddBezierQuadratic(self, p1[BUFFER], p2[BUFFER], p3[BUFFER], col, thickness, num_segments);
// }
// export function imDrawList_AddImage(self: ImDrawList, user_texture_id: ImTextureID, min: ImVec2, max: ImVec2, uv_min: ImVec2, uv_max: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_AddImage(self, user_texture_id, min[BUFFER], max[BUFFER], uv_min[BUFFER], uv_max[BUFFER], col);
// }
// export function imDrawList_AddImageQuad(self: ImDrawList, user_texture_id: ImTextureID, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, uv1: ImVec2, uv2: ImVec2, uv3: ImVec2, uv4: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_AddImageQuad(self, user_texture_id, p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], uv1[BUFFER], uv2[BUFFER], uv3[BUFFER], uv4[BUFFER], col);
// }
// export function imDrawList_AddImageRounded(self: ImDrawList, user_texture_id: ImTextureID, min: ImVec2, max: ImVec2, uv_min: ImVec2, uv_max: ImVec2, col: ImU32, rounding: number, flags: ImDrawFlags): void {
//    imgui.ImDrawList_AddImageRounded(self, user_texture_id, min[BUFFER], max[BUFFER], uv_min[BUFFER], uv_max[BUFFER], col, rounding, flags);
// }
// export function imDrawList_PathClear(self: ImDrawList): void {
//    imgui.ImDrawList_PathClear(self);
// }
// export function imDrawList_PathLineTo(self: ImDrawList, pos: ImVec2): void {
//    imgui.ImDrawList_PathLineTo(self, pos[BUFFER]);
// }
// export function imDrawList_PathLineToMergeDuplicate(self: ImDrawList, pos: ImVec2): void {
//    imgui.ImDrawList_PathLineToMergeDuplicate(self, pos[BUFFER]);
// }
// export function imDrawList_PathFillConvex(self: ImDrawList, col: ImU32): void {
//    imgui.ImDrawList_PathFillConvex(self, col);
// }
// export function imDrawList_PathStroke(self: ImDrawList, col: ImU32, flags: ImDrawFlags, thickness: number): void {
//    imgui.ImDrawList_PathStroke(self, col, flags, thickness);
// }
// export function imDrawList_PathArcTo(self: ImDrawList, center: ImVec2, radius: number, a_min: number, a_max: number, num_segments: number): void {
//    imgui.ImDrawList_PathArcTo(self, center[BUFFER], radius, a_min, a_max, num_segments);
// }
// export function imDrawList_PathArcToFast(self: ImDrawList, center: ImVec2, radius: number, a_min_of_12: number, a_max_of_12: number): void {
//    imgui.ImDrawList_PathArcToFast(self, center[BUFFER], radius, a_min_of_12, a_max_of_12);
// }
// export function imDrawList_PathBezierCubicCurveTo(self: ImDrawList, p2: ImVec2, p3: ImVec2, p4: ImVec2, num_segments: number): void {
//    imgui.ImDrawList_PathBezierCubicCurveTo(self, p2[BUFFER], p3[BUFFER], p4[BUFFER], num_segments);
// }
// export function imDrawList_PathBezierQuadraticCurveTo(self: ImDrawList, p2: ImVec2, p3: ImVec2, num_segments: number): void {
//    imgui.ImDrawList_PathBezierQuadraticCurveTo(self, p2[BUFFER], p3[BUFFER], num_segments);
// }
// export function imDrawList_PathRect(self: ImDrawList, rect_min: ImVec2, rect_max: ImVec2, rounding: number, flags: ImDrawFlags): void {
//    imgui.ImDrawList_PathRect(self, rect_min[BUFFER], rect_max[BUFFER], rounding, flags);
// }
// export function imDrawList_AddCallback(self: ImDrawList, callback: ImDrawCallback, callback_data: BufferSource): void {
//    imgui.ImDrawList_AddCallback(self, callback.pointer, callback_data);
// }
// export function imDrawList_AddDrawCmd(self: ImDrawList): void {
//    imgui.ImDrawList_AddDrawCmd(self);
// }
// export function imDrawList_CloneOutput(self: ImDrawList): ImDrawList {
//   return imgui.ImDrawList_CloneOutput(self);
// }
// export function imDrawList_ChannelsSplit(self: ImDrawList, count: number): void {
//    imgui.ImDrawList_ChannelsSplit(self, count);
// }
// export function imDrawList_ChannelsMerge(self: ImDrawList): void {
//    imgui.ImDrawList_ChannelsMerge(self);
// }
// export function imDrawList_ChannelsSetCurrent(self: ImDrawList, n: number): void {
//    imgui.ImDrawList_ChannelsSetCurrent(self, n);
// }
// export function imDrawList_PrimReserve(self: ImDrawList, idx_count: number, vtx_count: number): void {
//    imgui.ImDrawList_PrimReserve(self, idx_count, vtx_count);
// }
// export function imDrawList_PrimUnreserve(self: ImDrawList, idx_count: number, vtx_count: number): void {
//    imgui.ImDrawList_PrimUnreserve(self, idx_count, vtx_count);
// }
// export function imDrawList_PrimRect(self: ImDrawList, a: ImVec2, b: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_PrimRect(self, a[BUFFER], b[BUFFER], col);
// }
// export function imDrawList_PrimRectUV(self: ImDrawList, a: ImVec2, b: ImVec2, uv_a: ImVec2, uv_b: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_PrimRectUV(self, a[BUFFER], b[BUFFER], uv_a[BUFFER], uv_b[BUFFER], col);
// }
// export function imDrawList_PrimQuadUV(self: ImDrawList, a: ImVec2, b: ImVec2, c: ImVec2, d: ImVec2, uv_a: ImVec2, uv_b: ImVec2, uv_c: ImVec2, uv_d: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_PrimQuadUV(self, a[BUFFER], b[BUFFER], c[BUFFER], d[BUFFER], uv_a[BUFFER], uv_b[BUFFER], uv_c[BUFFER], uv_d[BUFFER], col);
// }
// export function imDrawList_PrimWriteVtx(self: ImDrawList, pos: ImVec2, uv: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_PrimWriteVtx(self, pos[BUFFER], uv[BUFFER], col);
// }
// export function imDrawList_PrimWriteIdx(self: ImDrawList, idx: ImDrawIdx): void {
//    imgui.ImDrawList_PrimWriteIdx(self, idx);
// }
// export function imDrawList_PrimVtx(self: ImDrawList, pos: ImVec2, uv: ImVec2, col: ImU32): void {
//    imgui.ImDrawList_PrimVtx(self, pos[BUFFER], uv[BUFFER], col);
// }
// export function imDrawList__ResetForNewFrame(self: ImDrawList): void {
//    imgui.ImDrawList__ResetForNewFrame(self);
// }
// export function imDrawList__ClearFreeMemory(self: ImDrawList): void {
//    imgui.ImDrawList__ClearFreeMemory(self);
// }
// export function imDrawList__PopUnusedDrawCmd(self: ImDrawList): void {
//    imgui.ImDrawList__PopUnusedDrawCmd(self);
// }
// export function imDrawList__TryMergeDrawCmds(self: ImDrawList): void {
//    imgui.ImDrawList__TryMergeDrawCmds(self);
// }
// export function imDrawList__OnChangedClipRect(self: ImDrawList): void {
//    imgui.ImDrawList__OnChangedClipRect(self);
// }
// export function imDrawList__OnChangedTextureID(self: ImDrawList): void {
//    imgui.ImDrawList__OnChangedTextureID(self);
// }
// export function imDrawList__OnChangedVtxOffset(self: ImDrawList): void {
//    imgui.ImDrawList__OnChangedVtxOffset(self);
// }
// export function imDrawList__CalcCircleAutoSegmentCount(self: ImDrawList, radius: number): number {
//   return imgui.ImDrawList__CalcCircleAutoSegmentCount(self, radius);
// }
// export function imDrawList__PathArcToFastEx(self: ImDrawList, center: ImVec2, radius: number, a_min_sample: number, a_max_sample: number, a_step: number): void {
//    imgui.ImDrawList__PathArcToFastEx(self, center[BUFFER], radius, a_min_sample, a_max_sample, a_step);
// }
// export function imDrawList__PathArcToN(self: ImDrawList, center: ImVec2, radius: number, a_min: number, a_max: number, num_segments: number): void {
//    imgui.ImDrawList__PathArcToN(self, center[BUFFER], radius, a_min, a_max, num_segments);
// }
// export function imDrawData_ImDrawData(): ImDrawData {
//   return imgui.ImDrawData_ImDrawData();
// }
// export function imDrawData_destroy(self: ImDrawData): void {
//    imgui.ImDrawData_destroy(self);
// }
// export function imDrawData_Clear(self: ImDrawData): void {
//    imgui.ImDrawData_Clear(self);
// }
// export function imDrawData_DeIndexAllBuffers(self: ImDrawData): void {
//    imgui.ImDrawData_DeIndexAllBuffers(self);
// }
// export function imDrawData_ScaleClipRects(self: ImDrawData, fb_scale: ImVec2): void {
//    imgui.ImDrawData_ScaleClipRects(self, fb_scale[BUFFER]);
// }
// export function imFontConf_ImFontConfig(): ImFontConfig {
//   return imgui.ImFontConfig_ImFontConfig();
// }
// export function imFontConf_destroy(self: ImFontConfig): void {
//    imgui.ImFontConfig_destroy(self);
// }
// export function imFontGlyphRangesBuilder_ImFontGlyphRangesBuilder(): ImFontGlyphRangesBuilder {
//   return imgui.ImFontGlyphRangesBuilder_ImFontGlyphRangesBuilder();
// }
// export function imFontGlyphRangesBuilder_destroy(self: ImFontGlyphRangesBuilder): void {
//    imgui.ImFontGlyphRangesBuilder_destroy(self);
// }
// export function imFontGlyphRangesBuilder_Clear(self: ImFontGlyphRangesBuilder): void {
//    imgui.ImFontGlyphRangesBuilder_Clear(self);
// }
// export function imFontGlyphRangesBuilder_GetBit(self: ImFontGlyphRangesBuilder, n: Deno.PointerValue): boolean {
//   return imgui.ImFontGlyphRangesBuilder_GetBit(self, n);
// }
// export function imFontGlyphRangesBuilder_SetBit(self: ImFontGlyphRangesBuilder, n: Deno.PointerValue): void {
//    imgui.ImFontGlyphRangesBuilder_SetBit(self, n);
// }
// export function imFontGlyphRangesBuilder_AddChar(self: ImFontGlyphRangesBuilder, c: ImWchar): void {
//    imgui.ImFontGlyphRangesBuilder_AddChar(self, c);
// }
// export function imFontGlyphRangesBuilder_AddText(self: ImFontGlyphRangesBuilder, text: StringSource, text_end: StringSource): void {
//    imgui.ImFontGlyphRangesBuilder_AddText(self, cString(text), cString(text_end));
// }
// export function imFontGlyphRangesBuilder_AddRanges(self: ImFontGlyphRangesBuilder, ranges: StringSource): void {
//    imgui.ImFontGlyphRangesBuilder_AddRanges(self, ranges);
// }
// export function imFontGlyphRangesBuilder_BuildRanges(self: ImFontGlyphRangesBuilder, out_ranges: ImVector_ImWchar): void {
//    imgui.ImFontGlyphRangesBuilder_BuildRanges(self, out_ranges);
// }
// export function imFontAtlasCustomRect_ImFontAtlasCustomRect(): ImFontAtlasCustomRect {
//   return imgui.ImFontAtlasCustomRect_ImFontAtlasCustomRect();
// }
// export function imFontAtlasCustomRect_destroy(self: ImFontAtlasCustomRect): void {
//    imgui.ImFontAtlasCustomRect_destroy(self);
// }
// export function imFontAtlasCustomRect_IsPacked(self: ImFontAtlasCustomRect): boolean {
//   return imgui.ImFontAtlasCustomRect_IsPacked(self);
// }
// export function imFontAtlas_ImFontAtlas(): ImFontAtlas {
//   return imgui.ImFontAtlas_ImFontAtlas();
// }
// export function imFontAtlas_destroy(self: ImFontAtlas): void {
//    imgui.ImFontAtlas_destroy(self);
// }
// export function imFontAtlas_AddFont(self: ImFontAtlas, font_cfg: ImFontConfig): ImFont {
//   return imgui.ImFontAtlas_AddFont(self, font_cfg);
// }
// export function imFontAtlas_AddFontDefault(self: ImFontAtlas, font_cfg: ImFontConfig): ImFont {
//   return imgui.ImFontAtlas_AddFontDefault(self, font_cfg);
// }
// export function imFontAtlas_AddFontFromMemoryTTF(self: ImFontAtlas, font_data: BufferSource, font_size: number, size_pixels: number, font_cfg: ImFontConfig, glyph_ranges: StringSource): ImFont {
//   return imgui.ImFontAtlas_AddFontFromMemoryTTF(self, font_data, font_size, size_pixels, font_cfg, glyph_ranges);
// }
// export function imFontAtlas_AddFontFromMemoryCompressedTTF(self: ImFontAtlas, compressed_font_data: BufferSource, compressed_font_size: number, size_pixels: number, font_cfg: ImFontConfig, glyph_ranges: StringSource): ImFont {
//   return imgui.ImFontAtlas_AddFontFromMemoryCompressedTTF(self, compressed_font_data, compressed_font_size, size_pixels, font_cfg, glyph_ranges);
// }
// export function imFontAtlas_AddFontFromMemoryCompressedBase85TTF(self: ImFontAtlas, compressed_font_data_base85: StringSource, size_pixels: number, font_cfg: ImFontConfig, glyph_ranges: StringSource): ImFont {
//   return imgui.ImFontAtlas_AddFontFromMemoryCompressedBase85TTF(self, cString(compressed_font_data_base85), size_pixels, font_cfg, glyph_ranges);
// }
// export function imFontAtlas_ClearInputData(self: ImFontAtlas): void {
//    imgui.ImFontAtlas_ClearInputData(self);
// }
// export function imFontAtlas_ClearTexData(self: ImFontAtlas): void {
//    imgui.ImFontAtlas_ClearTexData(self);
// }
// export function imFontAtlas_ClearFonts(self: ImFontAtlas): void {
//    imgui.ImFontAtlas_ClearFonts(self);
// }
// export function imFontAtlas_Clear(self: ImFontAtlas): void {
//    imgui.ImFontAtlas_Clear(self);
// }
// export function imFontAtlas_Build(self: ImFontAtlas): boolean {
//   return imgui.ImFontAtlas_Build(self);
// }
// export function imFontAtlas_GetTexDataAsAlpha8(self: ImFontAtlas, out_pixels: Deno.UnsafeCallback, out_width: Int32Array, out_height: Int32Array, out_bytes_per_pixel: Int32Array): void {
//    imgui.ImFontAtlas_GetTexDataAsAlpha8(self, out_pixels, out_width, out_height, out_bytes_per_pixel);
// }
// export function imFontAtlas_GetTexDataAsRGBA32(self: ImFontAtlas, out_pixels: Deno.UnsafeCallback, out_width: Int32Array, out_height: Int32Array, out_bytes_per_pixel: Int32Array): void {
//    imgui.ImFontAtlas_GetTexDataAsRGBA32(self, out_pixels, out_width, out_height, out_bytes_per_pixel);
// }
// export function imFontAtlas_IsBuilt(self: ImFontAtlas): boolean {
//   return imgui.ImFontAtlas_IsBuilt(self);
// }
// export function imFontAtlas_SetTexID(self: ImFontAtlas, id: ImTextureID): void {
//    imgui.ImFontAtlas_SetTexID(self, id);
// }
// export function imFontAtlas_GetGlyphRangesDefault(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesDefault(self);
// }
// export function imFontAtlas_GetGlyphRangesGreek(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesGreek(self);
// }
// export function imFontAtlas_GetGlyphRangesKorean(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesKorean(self);
// }
// export function imFontAtlas_GetGlyphRangesJapanese(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesJapanese(self);
// }
// export function imFontAtlas_GetGlyphRangesChineseFull(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesChineseFull(self);
// }
// export function imFontAtlas_GetGlyphRangesChineseSimplifiedCommon(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesChineseSimplifiedCommon(self);
// }
// export function imFontAtlas_GetGlyphRangesCyrillic(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesCyrillic(self);
// }
// export function imFontAtlas_GetGlyphRangesThai(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesThai(self);
// }
// export function imFontAtlas_GetGlyphRangesVietnamese(self: ImFontAtlas): StringSource {
//   return imgui.ImFontAtlas_GetGlyphRangesVietnamese(self);
// }
// export function imFontAtlas_AddCustomRectRegular(self: ImFontAtlas, width: number, height: number): number {
//   return imgui.ImFontAtlas_AddCustomRectRegular(self, width, height);
// }
// export function imFontAtlas_AddCustomRectFontGlyph(self: ImFontAtlas, font: ImFont, id: ImWchar, width: number, height: number, advance_x: number, offset: ImVec2): number {
//   return imgui.ImFontAtlas_AddCustomRectFontGlyph(self, font, id, width, height, advance_x, offset[BUFFER]);
// }
// export function imFontAtlas_GetCustomRectByIndex(self: ImFontAtlas, index: number): ImFontAtlasCustomRect {
//   return imgui.ImFontAtlas_GetCustomRectByIndex(self, index);
// }
// export function imFontAtlas_CalcCustomRectUV(self: ImFontAtlas, rect: ImFontAtlasCustomRect, out_uv_min: ImVec2, out_uv_max: ImVec2): void {
//    imgui.ImFontAtlas_CalcCustomRectUV(self, rect, out_uv_min, out_uv_max);
// }
// export function imFontAtlas_GetMouseCursorTexData(self: ImFontAtlas, cursor: ImGuiMouseCursor, out_offset: ImVec2, out_size: ImVec2, out_uv_border: ImVec2[], out_uv_fill: ImVec2[]): boolean {
//   return imgui.ImFontAtlas_GetMouseCursorTexData(self, cursor, out_offset, out_size, out_uv_border, out_uv_fill);
// }
// export function imFont_ImFont(): ImFont {
//   return imgui.ImFont_ImFont();
// }
// export function imFont_destroy(self: ImFont): void {
//    imgui.ImFont_destroy(self);
// }
// export function imFont_FindGlyph(self: ImFont, c: ImWchar): ImFontGlyph {
//   return imgui.ImFont_FindGlyph(self, c);
// }
// export function imFont_FindGlyphNoFallback(self: ImFont, c: ImWchar): ImFontGlyph {
//   return imgui.ImFont_FindGlyphNoFallback(self, c);
// }
// export function imFont_GetCharAdvance(self: ImFont, c: ImWchar): number {
//   return imgui.ImFont_GetCharAdvance(self, c);
// }
// export function imFont_IsLoaded(self: ImFont): boolean {
//   return imgui.ImFont_IsLoaded(self);
// }
// export function imFont_GetDebugName(self: ImFont): string {
//   return imgui.ImFont_GetDebugName(self);
// }
// export function imFont_CalcTextSizeA(pOut: ImVec2, self: ImFont, size: number, max_width: number, wrap_width: number, text_begin: StringSource, text_end: StringSource, remaining: Deno.UnsafeCallback): void {
//    imgui.ImFont_CalcTextSizeA(pOut, self, size, max_width, wrap_width, cString(text_begin), cString(text_end), remaining);
// }
// export function imFont_CalcWordWrapPositionA(self: ImFont, scale: number, text: StringSource, text_end: StringSource, wrap_width: number): string {
//   return imgui.ImFont_CalcWordWrapPositionA(self, scale, cString(text), cString(text_end), wrap_width);
// }
// export function imFont_RenderChar(self: ImFont, draw_list: ImDrawList, size: number, pos: ImVec2, col: ImU32, c: ImWchar): void {
//    imgui.ImFont_RenderChar(self, draw_list, size, pos[BUFFER], col, c);
// }
// export function imFont_RenderText(self: ImFont, draw_list: ImDrawList, size: number, pos: ImVec2, col: ImU32, clip_rect: ImVec4, text_begin: StringSource, text_end: StringSource, wrap_width: number, cpu_fine_clip: boolean): void {
//    imgui.ImFont_RenderText(self, draw_list, size, pos[BUFFER], col, clip_rect[BUFFER], cString(text_begin), cString(text_end), wrap_width, cpu_fine_clip);
// }
// export function imFont_BuildLookupTable(self: ImFont): void {
//    imgui.ImFont_BuildLookupTable(self);
// }
// export function imFont_ClearOutputData(self: ImFont): void {
//    imgui.ImFont_ClearOutputData(self);
// }
// export function imFont_GrowIndex(self: ImFont, new_size: number): void {
//    imgui.ImFont_GrowIndex(self, new_size);
// }
// export function imFont_AddGlyph(self: ImFont, src_cfg: ImFontConfig, c: ImWchar, x0: number, y0: number, x1: number, y1: number, u0: number, v0: number, u1: number, v1: number, advance_x: number): void {
//    imgui.ImFont_AddGlyph(self, src_cfg, c, x0, y0, x1, y1, u0, v0, u1, v1, advance_x);
// }
// export function imFont_AddRemapChar(self: ImFont, dst: ImWchar, src: ImWchar, overwrite_dst: boolean): void {
//    imgui.ImFont_AddRemapChar(self, dst, src, overwrite_dst);
// }
// export function imFont_SetGlyphVisible(self: ImFont, c: ImWchar, visible: boolean): void {
//    imgui.ImFont_SetGlyphVisible(self, c, visible);
// }
// export function imFont_IsGlyphRangeUnused(self: ImFont, c_begin: number, c_last: number): boolean {
//   return imgui.ImFont_IsGlyphRangeUnused(self, c_begin, c_last);
// }
// export function imGuiViewport_ImGuiViewport(): ImGuiViewport {
//   return imgui.ImGuiViewport_ImGuiViewport();
// }
// export function imGuiViewport_destroy(self: ImGuiViewport): void {
//    imgui.ImGuiViewport_destroy(self);
// }
// export function imGuiViewport_GetCenter(pOut: ImVec2, self: ImGuiViewport): void {
//    imgui.ImGuiViewport_GetCenter(pOut, self);
// }
// export function imGuiViewport_GetWorkCenter(pOut: ImVec2, self: ImGuiViewport): void {
//    imgui.ImGuiViewport_GetWorkCenter(pOut, self);
// }
// export function imGuiPlatformIO_ImGuiPlatformIO(): ImGuiPlatformIO {
//   return imgui.ImGuiPlatformIO_ImGuiPlatformIO();
// }
// export function imGuiPlatformIO_destroy(self: ImGuiPlatformIO): void {
//    imgui.ImGuiPlatformIO_destroy(self);
// }
// export function imGuiPlatformMonitor_ImGuiPlatformMonitor(): ImGuiPlatformMonitor {
//   return imgui.ImGuiPlatformMonitor_ImGuiPlatformMonitor();
// }
// export function imGuiPlatformMonitor_destroy(self: ImGuiPlatformMonitor): void {
//    imgui.ImGuiPlatformMonitor_destroy(self);
// }
// export function imGuiPlatformImeData_ImGuiPlatformImeData(): ImGuiPlatformImeData {
//   return imgui.ImGuiPlatformImeData_ImGuiPlatformImeData();
// }
// export function imGuiPlatformImeData_destroy(self: ImGuiPlatformImeData): void {
//    imgui.ImGuiPlatformImeData_destroy(self);
// }
// export function getKeyIndex(key: ImGuiKey): ImGuiKey {
//   return imgui.igGetKeyIndex(key);
// }
// export function imHashData(data: BufferSource, data_size: Deno.PointerValue, seed: ImU32): ImGuiID {
//   return imgui.igImHashData(data, data_size, seed);
// }
// export function imHashStr(data: StringSource, data_size: Deno.PointerValue, seed: ImU32): ImGuiID {
//   return imgui.igImHashStr(cString(data), data_size, seed);
// }
// export function imAlphaBlendColors(col_a: ImU32, col_b: ImU32): ImU32 {
//   return imgui.igImAlphaBlendColors(col_a, col_b);
// }
// export function imIsPowerOfTwo_Int(v: number): boolean {
//   return imgui.igImIsPowerOfTwo_Int(v);
// }
// export function imIsPowerOfTwo_U64(v: ImU64): boolean {
//   return imgui.igImIsPowerOfTwo_U64(v);
// }
// export function imUpperPowerOfTwo(v: number): number {
//   return imgui.igImUpperPowerOfTwo(v);
// }
// export function imStricmp(str1: StringSource, str2: StringSource): number {
//   return imgui.igImStricmp(cString(str1), cString(str2));
// }
// export function imStrnicmp(str1: StringSource, str2: StringSource, count: Deno.PointerValue): number {
//   return imgui.igImStrnicmp(cString(str1), cString(str2), count);
// }
// export function imStrncpy(dst: StringSource, src: StringSource, count: Deno.PointerValue): void {
//    imgui.igImStrncpy(cString(dst), cString(src), count);
// }
// export function imStrdup(str: StringSource): string {
//   return imgui.igImStrdup(cString(str));
// }
// export function imStrdupcpy(dst: StringSource, dst_size: size_t, str: StringSource): string {
//   return imgui.igImStrdupcpy(cString(dst), dst_size, cString(str));
// }
// export function imStrchrRange(str_begin: StringSource, str_end: StringSource, c: number): string {
//   return imgui.igImStrchrRange(cString(str_begin), cString(str_end), c);
// }
// export function imStrlenW(str: StringSource): number {
//   return imgui.igImStrlenW(str);
// }
// export function imStreolRange(str: StringSource, str_end: StringSource): string {
//   return imgui.igImStreolRange(cString(str), cString(str_end));
// }
// export function imStrbolW(buf_mid_line: StringSource, buf_begin: StringSource): StringSource {
//   return imgui.igImStrbolW(buf_mid_line, buf_begin);
// }
// export function imStristr(haystack: StringSource, haystack_end: StringSource, needle: StringSource, needle_end: StringSource): string {
//   return imgui.igImStristr(cString(haystack), cString(haystack_end), cString(needle), cString(needle_end));
// }
// export function imStrTrimBlanks(str: StringSource): void {
//    imgui.igImStrTrimBlanks(cString(str));
// }
// export function imStrSkipBlank(str: StringSource): string {
//   return imgui.igImStrSkipBlank(cString(str));
// }
// export function imToUpper(c: number): number {
//   return imgui.igImToUpper(c);
// }
// export function imCharIsBlankA(c: number): boolean {
//   return imgui.igImCharIsBlankA(c);
// }
// export function imCharIsBlankW(c: number): boolean {
//   return imgui.igImCharIsBlankW(c);
// }
// export function imFormatString(buf: StringSource, buf_size: Deno.PointerValue, fmt: StringSource): number {
//   return imgui.igImFormatString(cString(buf), buf_size, cString(fmt));
// }
// export function imFormatStringV(buf: StringSource, buf_size: Deno.PointerValue, fmt: StringSource): number {
//   return imgui.igImFormatStringV(cString(buf), buf_size, cString(fmt));
// }
// export function imFormatStringToTempBuffer(out_buf: Deno.UnsafeCallback, out_buf_end: Deno.UnsafeCallback, fmt: StringSource): void {
//    imgui.igImFormatStringToTempBuffer(out_buf, out_buf_end, cString(fmt));
// }
// export function imFormatStringToTempBufferV(out_buf: Deno.UnsafeCallback, out_buf_end: Deno.UnsafeCallback, fmt: StringSource): void {
//    imgui.igImFormatStringToTempBufferV(out_buf, out_buf_end, cString(fmt));
// }
// export function imParseFormatFindStart(format: StringSource): string {
//   return imgui.igImParseFormatFindStart(cString(format));
// }
// export function imParseFormatFindEnd(format: StringSource): string {
//   return imgui.igImParseFormatFindEnd(cString(format));
// }
// export function imParseFormatTrimDecorations(format: StringSource, buf: StringSource, buf_size: Deno.PointerValue): string {
//   return imgui.igImParseFormatTrimDecorations(cString(format), cString(buf), buf_size);
// }
// export function imParseFormatSanitizeForPrinting(fmt_in: StringSource, fmt_out: StringSource, fmt_out_size: Deno.PointerValue): void {
//    imgui.igImParseFormatSanitizeForPrinting(cString(fmt_in), cString(fmt_out), fmt_out_size);
// }
// export function imParseFormatSanitizeForScanning(fmt_in: StringSource, fmt_out: StringSource, fmt_out_size: Deno.PointerValue): string {
//   return imgui.igImParseFormatSanitizeForScanning(cString(fmt_in), cString(fmt_out), fmt_out_size);
// }
// export function imParseFormatPrecision(format: StringSource, default_value: number): number {
//   return imgui.igImParseFormatPrecision(cString(format), default_value);
// }
// export function imTextCharToUtf8(out_buf: char[], c: number): string {
//   return imgui.igImTextCharToUtf8(out_buf, c);
// }
// export function imTextStrToUtf8(out_buf: StringSource, out_buf_size: number, in_text: StringSource, in_text_end: StringSource): number {
//   return imgui.igImTextStrToUtf8(cString(out_buf), out_buf_size, in_text, in_text_end);
// }
// export function imTextCharFromUtf8(out_char: unsigned int, in_text: StringSource, in_text_end: StringSource): number {
//   return imgui.igImTextCharFromUtf8(out_char, cString(in_text), cString(in_text_end));
// }
// export function imTextStrFromUtf8(out_buf: StringSource, out_buf_size: number, in_text: StringSource, in_text_end: StringSource, in_remaining: Deno.UnsafeCallback): number {
//   return imgui.igImTextStrFromUtf8(out_buf, out_buf_size, cString(in_text), cString(in_text_end), in_remaining);
// }
// export function imTextCountCharsFromUtf8(in_text: StringSource, in_text_end: StringSource): number {
//   return imgui.igImTextCountCharsFromUtf8(cString(in_text), cString(in_text_end));
// }
// export function imTextCountUtf8BytesFromChar(in_text: StringSource, in_text_end: StringSource): number {
//   return imgui.igImTextCountUtf8BytesFromChar(cString(in_text), cString(in_text_end));
// }
// export function imTextCountUtf8BytesFromStr(in_text: StringSource, in_text_end: StringSource): number {
//   return imgui.igImTextCountUtf8BytesFromStr(in_text, in_text_end);
// }
// export function imPow_Float(x: number, y: number): number {
//   return imgui.igImPow_Float(x, y);
// }
// export function imPow_double(x: number, y: number): number {
//   return imgui.igImPow_double(x, y);
// }
// export function imLog_Float(x: number): number {
//   return imgui.igImLog_Float(x);
// }
// export function imLog_double(x: number): number {
//   return imgui.igImLog_double(x);
// }
// export function imAbs_Int(x: number): number {
//   return imgui.igImAbs_Int(x);
// }
// export function imAbs_Float(x: number): number {
//   return imgui.igImAbs_Float(x);
// }
// export function imAbs_double(x: number): number {
//   return imgui.igImAbs_double(x);
// }
// export function imSign_Float(x: number): number {
//   return imgui.igImSign_Float(x);
// }
// export function imSign_double(x: number): number {
//   return imgui.igImSign_double(x);
// }
// export function imRsqrt_Float(x: number): number {
//   return imgui.igImRsqrt_Float(x);
// }
// export function imRsqrt_double(x: number): number {
//   return imgui.igImRsqrt_double(x);
// }
// export function imMin(pOut: ImVec2, lhs: ImVec2, rhs: ImVec2): void {
//    imgui.igImMin(pOut, lhs[BUFFER], rhs[BUFFER]);
// }
// export function imMax(pOut: ImVec2, lhs: ImVec2, rhs: ImVec2): void {
//    imgui.igImMax(pOut, lhs[BUFFER], rhs[BUFFER]);
// }
// export function imClamp(pOut: ImVec2, v: ImVec2, mn: ImVec2, mx: ImVec2): void {
//    imgui.igImClamp(pOut, v[BUFFER], mn[BUFFER], mx[BUFFER]);
// }
// export function imLerp_Vec2Float(pOut: ImVec2, a: ImVec2, b: ImVec2, t: number): void {
//    imgui.igImLerp_Vec2Float(pOut, a[BUFFER], b[BUFFER], t);
// }
// export function imLerp_Vec2Vec2(pOut: ImVec2, a: ImVec2, b: ImVec2, t: ImVec2): void {
//    imgui.igImLerp_Vec2Vec2(pOut, a[BUFFER], b[BUFFER], t[BUFFER]);
// }
// export function imLerp_Vec4(pOut: ImVec4, a: ImVec4, b: ImVec4, t: number): void {
//    imgui.igImLerp_Vec4(pOut, a[BUFFER], b[BUFFER], t);
// }
// export function imSaturate(f: number): number {
//   return imgui.igImSaturate(f);
// }
// export function imLengthSqr_Vec2(lhs: ImVec2): number {
//   return imgui.igImLengthSqr_Vec2(lhs[BUFFER]);
// }
// export function imLengthSqr_Vec4(lhs: ImVec4): number {
//   return imgui.igImLengthSqr_Vec4(lhs[BUFFER]);
// }
// export function imInvLength(lhs: ImVec2, fail_value: number): number {
//   return imgui.igImInvLength(lhs[BUFFER], fail_value);
// }
// export function imFloor_Float(f: number): number {
//   return imgui.igImFloor_Float(f);
// }
// export function imFloorSigned_Float(f: number): number {
//   return imgui.igImFloorSigned_Float(f);
// }
// export function imFloor_Vec2(pOut: ImVec2, v: ImVec2): void {
//    imgui.igImFloor_Vec2(pOut, v[BUFFER]);
// }
// export function imFloorSigned_Vec2(pOut: ImVec2, v: ImVec2): void {
//    imgui.igImFloorSigned_Vec2(pOut, v[BUFFER]);
// }
// export function imModPositive(a: number, b: number): number {
//   return imgui.igImModPositive(a, b);
// }
// export function imDot(a: ImVec2, b: ImVec2): number {
//   return imgui.igImDot(a[BUFFER], b[BUFFER]);
// }
// export function imRotate(pOut: ImVec2, v: ImVec2, cos_a: number, sin_a: number): void {
//    imgui.igImRotate(pOut, v[BUFFER], cos_a, sin_a);
// }
// export function imLinearSweep(current: number, target: number, speed: number): number {
//   return imgui.igImLinearSweep(current, target, speed);
// }
// export function imMul(pOut: ImVec2, lhs: ImVec2, rhs: ImVec2): void {
//    imgui.igImMul(pOut, lhs[BUFFER], rhs[BUFFER]);
// }
// export function imIsFloatAboveGuaranteedIntegerPrecision(f: number): boolean {
//   return imgui.igImIsFloatAboveGuaranteedIntegerPrecision(f);
// }
// export function imExponentialMovingAverage(avg: number, sample: number, n: number): number {
//   return imgui.igImExponentialMovingAverage(avg, sample, n);
// }
// export function imBezierCubicCalc(pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, t: number): void {
//    imgui.igImBezierCubicCalc(pOut, p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], t);
// }
// export function imBezierCubicClosestPoint(pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, p: ImVec2, num_segments: number): void {
//    imgui.igImBezierCubicClosestPoint(pOut, p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], p[BUFFER], num_segments);
// }
// export function imBezierCubicClosestPointCasteljau(pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, p: ImVec2, tess_tol: number): void {
//    imgui.igImBezierCubicClosestPointCasteljau(pOut, p1[BUFFER], p2[BUFFER], p3[BUFFER], p4[BUFFER], p[BUFFER], tess_tol);
// }
// export function imBezierQuadraticCalc(pOut: ImVec2, p1: ImVec2, p2: ImVec2, p3: ImVec2, t: number): void {
//    imgui.igImBezierQuadraticCalc(pOut, p1[BUFFER], p2[BUFFER], p3[BUFFER], t);
// }
// export function imLineClosestPoint(pOut: ImVec2, a: ImVec2, b: ImVec2, p: ImVec2): void {
//    imgui.igImLineClosestPoint(pOut, a[BUFFER], b[BUFFER], p[BUFFER]);
// }
// export function imTriangleContainsPoint(a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2): boolean {
//   return imgui.igImTriangleContainsPoint(a[BUFFER], b[BUFFER], c[BUFFER], p[BUFFER]);
// }
// export function imTriangleClosestPoint(pOut: ImVec2, a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2): void {
//    imgui.igImTriangleClosestPoint(pOut, a[BUFFER], b[BUFFER], c[BUFFER], p[BUFFER]);
// }
// export function imTriangleBarycentricCoords(a: ImVec2, b: ImVec2, c: ImVec2, p: ImVec2, out_u: Float32Array, out_v: Float32Array, out_w: Float32Array): void {
//    imgui.igImTriangleBarycentricCoords(a[BUFFER], b[BUFFER], c[BUFFER], p[BUFFER], out_u, out_v, out_w);
// }
// export function imTriangleArea(a: ImVec2, b: ImVec2, c: ImVec2): number {
//   return imgui.igImTriangleArea(a[BUFFER], b[BUFFER], c[BUFFER]);
// }
// export function imGetDirQuadrantFromDelta(dx: number, dy: number): ImGuiDir {
//   return imgui.igImGetDirQuadrantFromDelta(dx, dy);
// }
// export function imVec1_ImVec1_Nil(): ImVec1 {
//   return imgui.ImVec1_ImVec1_Nil();
// }
// export function imVec1_destroy(self: ImVec1): void {
//    imgui.ImVec1_destroy(self);
// }
// export function imVec1_ImVec1_Float(_x: number): ImVec1 {
//   return imgui.ImVec1_ImVec1_Float(_x);
// }
// export function imVec2ih_ImVec2ih_Nil(): ImVec2ih {
//   return imgui.ImVec2ih_ImVec2ih_Nil();
// }
// export function imVec2ih_destroy(self: ImVec2ih): void {
//    imgui.ImVec2ih_destroy(self);
// }
// export function imVec2ih_ImVec2ih_short(_x: short, _y: short): ImVec2ih {
//   return imgui.ImVec2ih_ImVec2ih_short(_x, _y);
// }
// export function imVec2ih_ImVec2ih_Vec2(rhs: ImVec2): ImVec2ih {
//   return imgui.ImVec2ih_ImVec2ih_Vec2(rhs[BUFFER]);
// }
// export function imRect_ImRect_Nil(): ImRect {
//   return imgui.ImRect_ImRect_Nil();
// }
// export function imRect_destroy(self: ImRect): void {
//    imgui.ImRect_destroy(self);
// }
// export function imRect_ImRect_Vec2(min: ImVec2, max: ImVec2): ImRect {
//   return imgui.ImRect_ImRect_Vec2(min[BUFFER], max[BUFFER]);
// }
// export function imRect_ImRect_Vec4(v: ImVec4): ImRect {
//   return imgui.ImRect_ImRect_Vec4(v[BUFFER]);
// }
// export function imRect_ImRect_Float(x1: number, y1: number, x2: number, y2: number): ImRect {
//   return imgui.ImRect_ImRect_Float(x1, y1, x2, y2);
// }
// export function imRect_GetCenter(pOut: ImVec2, self: ImRect): void {
//    imgui.ImRect_GetCenter(pOut, self);
// }
// export function imRect_GetSize(pOut: ImVec2, self: ImRect): void {
//    imgui.ImRect_GetSize(pOut, self);
// }
// export function imRect_GetWidth(self: ImRect): number {
//   return imgui.ImRect_GetWidth(self);
// }
// export function imRect_GetHeht(self: ImRect): number {
//   return imgui.ImRect_GetHeight(self);
// }
// export function imRect_GetArea(self: ImRect): number {
//   return imgui.ImRect_GetArea(self);
// }
// export function imRect_GetTL(pOut: ImVec2, self: ImRect): void {
//    imgui.ImRect_GetTL(pOut, self);
// }
// export function imRect_GetTR(pOut: ImVec2, self: ImRect): void {
//    imgui.ImRect_GetTR(pOut, self);
// }
// export function imRect_GetBL(pOut: ImVec2, self: ImRect): void {
//    imgui.ImRect_GetBL(pOut, self);
// }
// export function imRect_GetBR(pOut: ImVec2, self: ImRect): void {
//    imgui.ImRect_GetBR(pOut, self);
// }
// export function imRect_Contains_Vec2(self: ImRect, p: ImVec2): boolean {
//   return imgui.ImRect_Contains_Vec2(self, p[BUFFER]);
// }
// export function imRect_Contains_Rect(self: ImRect, r: ImRect): boolean {
//   return imgui.ImRect_Contains_Rect(self, r);
// }
// export function imRect_Overlaps(self: ImRect, r: ImRect): boolean {
//   return imgui.ImRect_Overlaps(self, r);
// }
// export function imRect_Add_Vec2(self: ImRect, p: ImVec2): void {
//    imgui.ImRect_Add_Vec2(self, p[BUFFER]);
// }
// export function imRect_Add_Rect(self: ImRect, r: ImRect): void {
//    imgui.ImRect_Add_Rect(self, r);
// }
// export function imRect_Expand_Float(self: ImRect, amount: number): void {
//    imgui.ImRect_Expand_Float(self, amount);
// }
// export function imRect_Expand_Vec2(self: ImRect, amount: ImVec2): void {
//    imgui.ImRect_Expand_Vec2(self, amount[BUFFER]);
// }
// export function imRect_Translate(self: ImRect, d: ImVec2): void {
//    imgui.ImRect_Translate(self, d[BUFFER]);
// }
// export function imRect_TranslateX(self: ImRect, dx: number): void {
//    imgui.ImRect_TranslateX(self, dx);
// }
// export function imRect_TranslateY(self: ImRect, dy: number): void {
//    imgui.ImRect_TranslateY(self, dy);
// }
// export function imRect_ClipWith(self: ImRect, r: ImRect): void {
//    imgui.ImRect_ClipWith(self, r);
// }
// export function imRect_ClipWithFull(self: ImRect, r: ImRect): void {
//    imgui.ImRect_ClipWithFull(self, r);
// }
// export function imRect_Floor(self: ImRect): void {
//    imgui.ImRect_Floor(self);
// }
// export function imRect_IsInverted(self: ImRect): boolean {
//   return imgui.ImRect_IsInverted(self);
// }
// export function imRect_ToVec4(pOut: ImVec4, self: ImRect): void {
//    imgui.ImRect_ToVec4(pOut, self);
// }
// export function imBitArrayTestBit(arr: ImU32, n: number): boolean {
//   return imgui.igImBitArrayTestBit(arr, n);
// }
// export function imBitArrayClearBit(arr: ImU32, n: number): void {
//    imgui.igImBitArrayClearBit(arr, n);
// }
// export function imBitArraySetBit(arr: ImU32, n: number): void {
//    imgui.igImBitArraySetBit(arr, n);
// }
// export function imBitArraySetBitRange(arr: ImU32, n: number, n2: number): void {
//    imgui.igImBitArraySetBitRange(arr, n, n2);
// }
// export function imBitVector_Create(self: ImBitVector, sz: number): void {
//    imgui.ImBitVector_Create(self, sz);
// }
// export function imBitVector_Clear(self: ImBitVector): void {
//    imgui.ImBitVector_Clear(self);
// }
// export function imBitVector_TestBit(self: ImBitVector, n: number): boolean {
//   return imgui.ImBitVector_TestBit(self, n);
// }
// export function imBitVector_SetBit(self: ImBitVector, n: number): void {
//    imgui.ImBitVector_SetBit(self, n);
// }
// export function imBitVector_ClearBit(self: ImBitVector, n: number): void {
//    imgui.ImBitVector_ClearBit(self, n);
// }
// export function imGuiTextIndex_clear(self: ImGuiTextIndex): void {
//    imgui.ImGuiTextIndex_clear(self);
// }
// export function imGuiTextIndex_size(self: ImGuiTextIndex): number {
//   return imgui.ImGuiTextIndex_size(self);
// }
// export function imGuiTextIndex_get_line_begin(self: ImGuiTextIndex, base: StringSource, n: number): string {
//   return imgui.ImGuiTextIndex_get_line_begin(self, cString(base), n);
// }
// export function imGuiTextIndex_get_line_end(self: ImGuiTextIndex, base: StringSource, n: number): string {
//   return imgui.ImGuiTextIndex_get_line_end(self, cString(base), n);
// }
// export function imGuiTextIndex_append(self: ImGuiTextIndex, base: StringSource, old_size: number, new_size: number): void {
//    imgui.ImGuiTextIndex_append(self, cString(base), old_size, new_size);
// }
// export function imDrawListSharedData_ImDrawListSharedData(): ImDrawListSharedData {
//   return imgui.ImDrawListSharedData_ImDrawListSharedData();
// }
// export function imDrawListSharedData_destroy(self: ImDrawListSharedData): void {
//    imgui.ImDrawListSharedData_destroy(self);
// }
// export function imDrawListSharedData_SetCircleTessellationMaxError(self: ImDrawListSharedData, max_error: number): void {
//    imgui.ImDrawListSharedData_SetCircleTessellationMaxError(self, max_error);
// }
// export function imDrawDataBuilder_Clear(self: ImDrawDataBuilder): void {
//    imgui.ImDrawDataBuilder_Clear(self);
// }
// export function imDrawDataBuilder_ClearFreeMemory(self: ImDrawDataBuilder): void {
//    imgui.ImDrawDataBuilder_ClearFreeMemory(self);
// }
// export function imDrawDataBuilder_GetDrawListCount(self: ImDrawDataBuilder): number {
//   return imgui.ImDrawDataBuilder_GetDrawListCount(self);
// }
// export function imDrawDataBuilder_FlattenIntoSingleLayer(self: ImDrawDataBuilder): void {
//    imgui.ImDrawDataBuilder_FlattenIntoSingleLayer(self);
// }
// export function imGuiStyleMod_ImGuiStyleMod_Int(idx: ImGuiStyleVar, v: number): ImGuiStyleMod {
//   return imgui.ImGuiStyleMod_ImGuiStyleMod_Int(idx, v);
// }
// export function imGuiStyleMod_destroy(self: ImGuiStyleMod): void {
//    imgui.ImGuiStyleMod_destroy(self);
// }
// export function imGuiStyleMod_ImGuiStyleMod_Float(idx: ImGuiStyleVar, v: number): ImGuiStyleMod {
//   return imgui.ImGuiStyleMod_ImGuiStyleMod_Float(idx, v);
// }
// export function imGuiStyleMod_ImGuiStyleMod_Vec2(idx: ImGuiStyleVar, v: ImVec2): ImGuiStyleMod {
//   return imgui.ImGuiStyleMod_ImGuiStyleMod_Vec2(idx, v[BUFFER]);
// }
// export function imGuiComboPreviewData_ImGuiComboPreviewData(): ImGuiComboPreviewData {
//   return imgui.ImGuiComboPreviewData_ImGuiComboPreviewData();
// }
// export function imGuiComboPreviewData_destroy(self: ImGuiComboPreviewData): void {
//    imgui.ImGuiComboPreviewData_destroy(self);
// }
// export function imGuiMenuColumns_ImGuiMenuColumns(): ImGuiMenuColumns {
//   return imgui.ImGuiMenuColumns_ImGuiMenuColumns();
// }
// export function imGuiMenuColumns_destroy(self: ImGuiMenuColumns): void {
//    imgui.ImGuiMenuColumns_destroy(self);
// }
// export function imGuiMenuColumns_Update(self: ImGuiMenuColumns, spacing: number, window_reappearing: boolean): void {
//    imgui.ImGuiMenuColumns_Update(self, spacing, window_reappearing);
// }
// export function imGuiMenuColumns_DeclColumns(self: ImGuiMenuColumns, w_icon: number, w_label: number, w_shortcut: number, w_mark: number): number {
//   return imgui.ImGuiMenuColumns_DeclColumns(self, w_icon, w_label, w_shortcut, w_mark);
// }
// export function imGuiMenuColumns_CalcNextTotalWidth(self: ImGuiMenuColumns, update_offsets: boolean): void {
//    imgui.ImGuiMenuColumns_CalcNextTotalWidth(self, update_offsets);
// }
// export function imGuiInputTextState_ImGuiInputTextState(ctx: ImGuiContext): ImGuiInputTextState {
//   return imgui.ImGuiInputTextState_ImGuiInputTextState(ctx);
// }
// export function imGuiInputTextState_destroy(self: ImGuiInputTextState): void {
//    imgui.ImGuiInputTextState_destroy(self);
// }
// export function imGuiInputTextState_ClearText(self: ImGuiInputTextState): void {
//    imgui.ImGuiInputTextState_ClearText(self);
// }
// export function imGuiInputTextState_ClearFreeMemory(self: ImGuiInputTextState): void {
//    imgui.ImGuiInputTextState_ClearFreeMemory(self);
// }
// export function imGuiInputTextState_GetUndoAvailCount(self: ImGuiInputTextState): number {
//   return imgui.ImGuiInputTextState_GetUndoAvailCount(self);
// }
// export function imGuiInputTextState_GetRedoAvailCount(self: ImGuiInputTextState): number {
//   return imgui.ImGuiInputTextState_GetRedoAvailCount(self);
// }
// export function imGuiInputTextState_OnKeyPressed(self: ImGuiInputTextState, key: number): void {
//    imgui.ImGuiInputTextState_OnKeyPressed(self, key);
// }
// export function imGuiInputTextState_CursorAnimReset(self: ImGuiInputTextState): void {
//    imgui.ImGuiInputTextState_CursorAnimReset(self);
// }
// export function imGuiInputTextState_CursorClamp(self: ImGuiInputTextState): void {
//    imgui.ImGuiInputTextState_CursorClamp(self);
// }
// export function imGuiInputTextState_HasSelection(self: ImGuiInputTextState): boolean {
//   return imgui.ImGuiInputTextState_HasSelection(self);
// }
// export function imGuiInputTextState_ClearSelection(self: ImGuiInputTextState): void {
//    imgui.ImGuiInputTextState_ClearSelection(self);
// }
// export function imGuiInputTextState_GetCursorPos(self: ImGuiInputTextState): number {
//   return imgui.ImGuiInputTextState_GetCursorPos(self);
// }
// export function imGuiInputTextState_GetSelectionStart(self: ImGuiInputTextState): number {
//   return imgui.ImGuiInputTextState_GetSelectionStart(self);
// }
// export function imGuiInputTextState_GetSelectionEnd(self: ImGuiInputTextState): number {
//   return imgui.ImGuiInputTextState_GetSelectionEnd(self);
// }
// export function imGuiInputTextState_SelectAll(self: ImGuiInputTextState): void {
//    imgui.ImGuiInputTextState_SelectAll(self);
// }
// export function imGuiPopupData_ImGuiPopupData(): ImGuiPopupData {
//   return imgui.ImGuiPopupData_ImGuiPopupData();
// }
// export function imGuiPopupData_destroy(self: ImGuiPopupData): void {
//    imgui.ImGuiPopupData_destroy(self);
// }
// export function imGuiNextWindowData_ImGuiNextWindowData(): ImGuiNextWindowData {
//   return imgui.ImGuiNextWindowData_ImGuiNextWindowData();
// }
// export function imGuiNextWindowData_destroy(self: ImGuiNextWindowData): void {
//    imgui.ImGuiNextWindowData_destroy(self);
// }
// export function imGuiNextWindowData_ClearFlags(self: ImGuiNextWindowData): void {
//    imgui.ImGuiNextWindowData_ClearFlags(self);
// }
// export function imGuiNextItemData_ImGuiNextItemData(): ImGuiNextItemData {
//   return imgui.ImGuiNextItemData_ImGuiNextItemData();
// }
// export function imGuiNextItemData_destroy(self: ImGuiNextItemData): void {
//    imgui.ImGuiNextItemData_destroy(self);
// }
// export function imGuiNextItemData_ClearFlags(self: ImGuiNextItemData): void {
//    imgui.ImGuiNextItemData_ClearFlags(self);
// }
// export function imGuiLastItemData_ImGuiLastItemData(): ImGuiLastItemData {
//   return imgui.ImGuiLastItemData_ImGuiLastItemData();
// }
// export function imGuiLastItemData_destroy(self: ImGuiLastItemData): void {
//    imgui.ImGuiLastItemData_destroy(self);
// }
// export function imGuiStackSizes_ImGuiStackSizes(): ImGuiStackSizes {
//   return imgui.ImGuiStackSizes_ImGuiStackSizes();
// }
// export function imGuiStackSizes_destroy(self: ImGuiStackSizes): void {
//    imgui.ImGuiStackSizes_destroy(self);
// }
// export function imGuiStackSizes_SetToCurrentState(self: ImGuiStackSizes): void {
//    imgui.ImGuiStackSizes_SetToCurrentState(self);
// }
// export function imGuiStackSizes_CompareWithCurrentState(self: ImGuiStackSizes): void {
//    imgui.ImGuiStackSizes_CompareWithCurrentState(self);
// }
// export function imGuiPtrOrIndex_ImGuiPtrOrIndex_Ptr(ptr: BufferSource): ImGuiPtrOrIndex {
//   return imgui.ImGuiPtrOrIndex_ImGuiPtrOrIndex_Ptr(ptr);
// }
// export function imGuiPtrOrIndex_destroy(self: ImGuiPtrOrIndex): void {
//    imgui.ImGuiPtrOrIndex_destroy(self);
// }
// export function imGuiPtrOrIndex_ImGuiPtrOrIndex_Int(index: number): ImGuiPtrOrIndex {
//   return imgui.ImGuiPtrOrIndex_ImGuiPtrOrIndex_Int(index);
// }
// export function imGuiInputEvent_ImGuiInputEvent(): ImGuiInputEvent {
//   return imgui.ImGuiInputEvent_ImGuiInputEvent();
// }
// export function imGuiInputEvent_destroy(self: ImGuiInputEvent): void {
//    imgui.ImGuiInputEvent_destroy(self);
// }
// export function imGuiKeyRoutingData_ImGuiKeyRoutingData(): ImGuiKeyRoutingData {
//   return imgui.ImGuiKeyRoutingData_ImGuiKeyRoutingData();
// }
// export function imGuiKeyRoutingData_destroy(self: ImGuiKeyRoutingData): void {
//    imgui.ImGuiKeyRoutingData_destroy(self);
// }
// export function imGuiKeyRoutingTable_ImGuiKeyRoutingTable(): ImGuiKeyRoutingTable {
//   return imgui.ImGuiKeyRoutingTable_ImGuiKeyRoutingTable();
// }
// export function imGuiKeyRoutingTable_destroy(self: ImGuiKeyRoutingTable): void {
//    imgui.ImGuiKeyRoutingTable_destroy(self);
// }
// export function imGuiKeyRoutingTable_Clear(self: ImGuiKeyRoutingTable): void {
//    imgui.ImGuiKeyRoutingTable_Clear(self);
// }
// export function imGuiKeyOwnerData_ImGuiKeyOwnerData(): ImGuiKeyOwnerData {
//   return imgui.ImGuiKeyOwnerData_ImGuiKeyOwnerData();
// }
// export function imGuiKeyOwnerData_destroy(self: ImGuiKeyOwnerData): void {
//    imgui.ImGuiKeyOwnerData_destroy(self);
// }
// export function imGuiListClipperData_ImGuiListClipperData(): ImGuiListClipperData {
//   return imgui.ImGuiListClipperData_ImGuiListClipperData();
// }
// export function imGuiListClipperData_destroy(self: ImGuiListClipperData): void {
//    imgui.ImGuiListClipperData_destroy(self);
// }
// export function imGuiListClipperData_Reset(self: ImGuiListClipperData, clipper: ImGuiListClipper): void {
//    imgui.ImGuiListClipperData_Reset(self, clipper);
// }
// export function imGuiNavItemData_ImGuiNavItemData(): ImGuiNavItemData {
//   return imgui.ImGuiNavItemData_ImGuiNavItemData();
// }
// export function imGuiNavItemData_destroy(self: ImGuiNavItemData): void {
//    imgui.ImGuiNavItemData_destroy(self);
// }
// export function imGuiNavItemData_Clear(self: ImGuiNavItemData): void {
//    imgui.ImGuiNavItemData_Clear(self);
// }
// export function imGuiOldColumnData_ImGuiOldColumnData(): ImGuiOldColumnData {
//   return imgui.ImGuiOldColumnData_ImGuiOldColumnData();
// }
// export function imGuiOldColumnData_destroy(self: ImGuiOldColumnData): void {
//    imgui.ImGuiOldColumnData_destroy(self);
// }
// export function imGuiOldColumns_ImGuiOldColumns(): ImGuiOldColumns {
//   return imgui.ImGuiOldColumns_ImGuiOldColumns();
// }
// export function imGuiOldColumns_destroy(self: ImGuiOldColumns): void {
//    imgui.ImGuiOldColumns_destroy(self);
// }
// export function imGuiDockNode_ImGuiDockNode(id: ImGuiID): ImGuiDockNode {
//   return imgui.ImGuiDockNode_ImGuiDockNode(id);
// }
// export function imGuiDockNode_destroy(self: ImGuiDockNode): void {
//    imgui.ImGuiDockNode_destroy(self);
// }
// export function imGuiDockNode_IsRootNode(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsRootNode(self);
// }
// export function imGuiDockNode_IsDockSpace(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsDockSpace(self);
// }
// export function imGuiDockNode_IsFloatingNode(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsFloatingNode(self);
// }
// export function imGuiDockNode_IsCentralNode(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsCentralNode(self);
// }
// export function imGuiDockNode_IsHiddenTabBar(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsHiddenTabBar(self);
// }
// export function imGuiDockNode_IsNoTabBar(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsNoTabBar(self);
// }
// export function imGuiDockNode_IsSplitNode(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsSplitNode(self);
// }
// export function imGuiDockNode_IsLeafNode(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsLeafNode(self);
// }
// export function imGuiDockNode_IsEmpty(self: ImGuiDockNode): boolean {
//   return imgui.ImGuiDockNode_IsEmpty(self);
// }
// export function imGuiDockNode_Rect(pOut: ImRect, self: ImGuiDockNode): void {
//    imgui.ImGuiDockNode_Rect(pOut, self);
// }
// export function imGuiDockNode_SetLocalFlags(self: ImGuiDockNode, flags: ImGuiDockNodeFlags): void {
//    imgui.ImGuiDockNode_SetLocalFlags(self, flags);
// }
// export function imGuiDockNode_UpdateMergedFlags(self: ImGuiDockNode): void {
//    imgui.ImGuiDockNode_UpdateMergedFlags(self);
// }
// export function imGuiDockContext_ImGuiDockContext(): ImGuiDockContext {
//   return imgui.ImGuiDockContext_ImGuiDockContext();
// }
// export function imGuiDockContext_destroy(self: ImGuiDockContext): void {
//    imgui.ImGuiDockContext_destroy(self);
// }
// export function imGuiViewportP_ImGuiViewportP(): ImGuiViewportP {
//   return imgui.ImGuiViewportP_ImGuiViewportP();
// }
// export function imGuiViewportP_destroy(self: ImGuiViewportP): void {
//    imgui.ImGuiViewportP_destroy(self);
// }
// export function imGuiViewportP_ClearRequestFlags(self: ImGuiViewportP): void {
//    imgui.ImGuiViewportP_ClearRequestFlags(self);
// }
// export function imGuiViewportP_CalcWorkRectPos(pOut: ImVec2, self: ImGuiViewportP, off_min: ImVec2): void {
//    imgui.ImGuiViewportP_CalcWorkRectPos(pOut, self, off_min[BUFFER]);
// }
// export function imGuiViewportP_CalcWorkRectSize(pOut: ImVec2, self: ImGuiViewportP, off_min: ImVec2, off_max: ImVec2): void {
//    imgui.ImGuiViewportP_CalcWorkRectSize(pOut, self, off_min[BUFFER], off_max[BUFFER]);
// }
// export function imGuiViewportP_UpdateWorkRect(self: ImGuiViewportP): void {
//    imgui.ImGuiViewportP_UpdateWorkRect(self);
// }
// export function imGuiViewportP_GetMainRect(pOut: ImRect, self: ImGuiViewportP): void {
//    imgui.ImGuiViewportP_GetMainRect(pOut, self);
// }
// export function imGuiViewportP_GetWorkRect(pOut: ImRect, self: ImGuiViewportP): void {
//    imgui.ImGuiViewportP_GetWorkRect(pOut, self);
// }
// export function imGuiViewportP_GetBuildWorkRect(pOut: ImRect, self: ImGuiViewportP): void {
//    imgui.ImGuiViewportP_GetBuildWorkRect(pOut, self);
// }
// export function imGuiWindowSettings_ImGuiWindowSettings(): ImGuiWindowSettings {
//   return imgui.ImGuiWindowSettings_ImGuiWindowSettings();
// }
// export function imGuiWindowSettings_destroy(self: ImGuiWindowSettings): void {
//    imgui.ImGuiWindowSettings_destroy(self);
// }
// export function imGuiWindowSettings_GetName(self: ImGuiWindowSettings): string {
//   return imgui.ImGuiWindowSettings_GetName(self);
// }
// export function imGuiSettingsHandler_ImGuiSettingsHandler(): ImGuiSettingsHandler {
//   return imgui.ImGuiSettingsHandler_ImGuiSettingsHandler();
// }
// export function imGuiSettingsHandler_destroy(self: ImGuiSettingsHandler): void {
//    imgui.ImGuiSettingsHandler_destroy(self);
// }
// export function imGuiMetricsConf_ImGuiMetricsConfig(): ImGuiMetricsConfig {
//   return imgui.ImGuiMetricsConfig_ImGuiMetricsConfig();
// }
// export function imGuiMetricsConf_destroy(self: ImGuiMetricsConfig): void {
//    imgui.ImGuiMetricsConfig_destroy(self);
// }
// export function imGuiStackLevelInfo_ImGuiStackLevelInfo(): ImGuiStackLevelInfo {
//   return imgui.ImGuiStackLevelInfo_ImGuiStackLevelInfo();
// }
// export function imGuiStackLevelInfo_destroy(self: ImGuiStackLevelInfo): void {
//    imgui.ImGuiStackLevelInfo_destroy(self);
// }
// export function imGuiStackTool_ImGuiStackTool(): ImGuiStackTool {
//   return imgui.ImGuiStackTool_ImGuiStackTool();
// }
// export function imGuiStackTool_destroy(self: ImGuiStackTool): void {
//    imgui.ImGuiStackTool_destroy(self);
// }
// export function imGuiContextHook_ImGuiContextHook(): ImGuiContextHook {
//   return imgui.ImGuiContextHook_ImGuiContextHook();
// }
// export function imGuiContextHook_destroy(self: ImGuiContextHook): void {
//    imgui.ImGuiContextHook_destroy(self);
// }
// export function imGuiContext_ImGuiContext(shared_font_atlas: ImFontAtlas): ImGuiContext {
//   return imgui.ImGuiContext_ImGuiContext(shared_font_atlas);
// }
// export function imGuiContext_destroy(self: ImGuiContext): void {
//    imgui.ImGuiContext_destroy(self);
// }
// export function imGuiWindow_ImGuiWindow(context: ImGuiContext, name: StringSource): ImGuiWindow {
//   return imgui.ImGuiWindow_ImGuiWindow(context, cString(name));
// }
// export function imGuiWindow_destroy(self: ImGuiWindow): void {
//    imgui.ImGuiWindow_destroy(self);
// }
// export function imGuiWindow_GetID_Str(self: ImGuiWindow, str: StringSource, str_end: StringSource): ImGuiID {
//   return imgui.ImGuiWindow_GetID_Str(self, cString(str), cString(str_end));
// }
// export function imGuiWindow_GetID_Ptr(self: ImGuiWindow, ptr: BufferSource): ImGuiID {
//   return imgui.ImGuiWindow_GetID_Ptr(self, ptr);
// }
// export function imGuiWindow_GetID_Int(self: ImGuiWindow, n: number): ImGuiID {
//   return imgui.ImGuiWindow_GetID_Int(self, n);
// }
// export function imGuiWindow_GetIDFromRectangle(self: ImGuiWindow, r_abs: ImRect): ImGuiID {
//   return imgui.ImGuiWindow_GetIDFromRectangle(self, r_abs);
// }
// export function imGuiWindow_Rect(pOut: ImRect, self: ImGuiWindow): void {
//    imgui.ImGuiWindow_Rect(pOut, self);
// }
// export function imGuiWindow_CalcFontSize(self: ImGuiWindow): number {
//   return imgui.ImGuiWindow_CalcFontSize(self);
// }
// export function imGuiWindow_TitleBarHeht(self: ImGuiWindow): number {
//   return imgui.ImGuiWindow_TitleBarHeight(self);
// }
// export function imGuiWindow_TitleBarRect(pOut: ImRect, self: ImGuiWindow): void {
//    imgui.ImGuiWindow_TitleBarRect(pOut, self);
// }
// export function imGuiWindow_MenuBarHeht(self: ImGuiWindow): number {
//   return imgui.ImGuiWindow_MenuBarHeight(self);
// }
// export function imGuiWindow_MenuBarRect(pOut: ImRect, self: ImGuiWindow): void {
//    imgui.ImGuiWindow_MenuBarRect(pOut, self);
// }
// export function imGuiTabItem_ImGuiTabItem(): ImGuiTabItem {
//   return imgui.ImGuiTabItem_ImGuiTabItem();
// }
// export function imGuiTabItem_destroy(self: ImGuiTabItem): void {
//    imgui.ImGuiTabItem_destroy(self);
// }
// export function imGuiTabBar_ImGuiTabBar(): ImGuiTabBar {
//   return imgui.ImGuiTabBar_ImGuiTabBar();
// }
// export function imGuiTabBar_destroy(self: ImGuiTabBar): void {
//    imgui.ImGuiTabBar_destroy(self);
// }
// export function imGuiTabBar_GetTabOrder(self: ImGuiTabBar, tab: ImGuiTabItem): number {
//   return imgui.ImGuiTabBar_GetTabOrder(self, tab);
// }
// export function imGuiTabBar_GetTabName(self: ImGuiTabBar, tab: ImGuiTabItem): string {
//   return imgui.ImGuiTabBar_GetTabName(self, tab);
// }
// export function imGuiTableColumn_ImGuiTableColumn(): ImGuiTableColumn {
//   return imgui.ImGuiTableColumn_ImGuiTableColumn();
// }
// export function imGuiTableColumn_destroy(self: ImGuiTableColumn): void {
//    imgui.ImGuiTableColumn_destroy(self);
// }
// export function imGuiTableInstanceData_ImGuiTableInstanceData(): ImGuiTableInstanceData {
//   return imgui.ImGuiTableInstanceData_ImGuiTableInstanceData();
// }
// export function imGuiTableInstanceData_destroy(self: ImGuiTableInstanceData): void {
//    imgui.ImGuiTableInstanceData_destroy(self);
// }
// export function imGuiTable_ImGuiTable(): ImGuiTable {
//   return imgui.ImGuiTable_ImGuiTable();
// }
// export function imGuiTable_destroy(self: ImGuiTable): void {
//    imgui.ImGuiTable_destroy(self);
// }
// export function imGuiTableTempData_ImGuiTableTempData(): ImGuiTableTempData {
//   return imgui.ImGuiTableTempData_ImGuiTableTempData();
// }
// export function imGuiTableTempData_destroy(self: ImGuiTableTempData): void {
//    imgui.ImGuiTableTempData_destroy(self);
// }
// export function imGuiTableColumnSettings_ImGuiTableColumnSettings(): ImGuiTableColumnSettings {
//   return imgui.ImGuiTableColumnSettings_ImGuiTableColumnSettings();
// }
// export function imGuiTableColumnSettings_destroy(self: ImGuiTableColumnSettings): void {
//    imgui.ImGuiTableColumnSettings_destroy(self);
// }
// export function imGuiTableSettings_ImGuiTableSettings(): ImGuiTableSettings {
//   return imgui.ImGuiTableSettings_ImGuiTableSettings();
// }
// export function imGuiTableSettings_destroy(self: ImGuiTableSettings): void {
//    imgui.ImGuiTableSettings_destroy(self);
// }
// export function imGuiTableSettings_GetColumnSettings(self: ImGuiTableSettings): ImGuiTableColumnSettings {
//   return imgui.ImGuiTableSettings_GetColumnSettings(self);
// }
// export function getCurrentWindowRead(): ImGuiWindow {
//   return imgui.igGetCurrentWindowRead();
// }
// export function getCurrentWindow(): ImGuiWindow {
//   return imgui.igGetCurrentWindow();
// }
// export function findWindowByID(id: ImGuiID): ImGuiWindow {
//   return imgui.igFindWindowByID(id);
// }
// export function findWindowByName(name: StringSource): ImGuiWindow {
//   return imgui.igFindWindowByName(cString(name));
// }
// export function updateWindowParentAndRootLinks(window: ImGuiWindow, flags: ImGuiWindowFlags, parent_window: ImGuiWindow): void {
//    imgui.igUpdateWindowParentAndRootLinks(window, flags, parent_window);
// }
// export function calcWindowNextAutoFitSize(pOut: ImVec2, window: ImGuiWindow): void {
//    imgui.igCalcWindowNextAutoFitSize(pOut, window);
// }
// export function isWindowChildOf(window: ImGuiWindow, potential_parent: ImGuiWindow, popup_hierarchy: boolean, dock_hierarchy: boolean): boolean {
//   return imgui.igIsWindowChildOf(window, potential_parent, popup_hierarchy, dock_hierarchy);
// }
// export function isWindowWithinBeginStackOf(window: ImGuiWindow, potential_parent: ImGuiWindow): boolean {
//   return imgui.igIsWindowWithinBeginStackOf(window, potential_parent);
// }
// export function isWindowAbove(potential_above: ImGuiWindow, potential_below: ImGuiWindow): boolean {
//   return imgui.igIsWindowAbove(potential_above, potential_below);
// }
// export function isWindowNavFocusable(window: ImGuiWindow): boolean {
//   return imgui.igIsWindowNavFocusable(window);
// }
// export function setWindowPos_WindowPtr(window: ImGuiWindow, pos: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowPos_WindowPtr(window, pos[BUFFER], cond);
// }
// export function setWindowSize_WindowPtr(window: ImGuiWindow, size: ImVec2, cond: ImGuiCond): void {
//    imgui.igSetWindowSize_WindowPtr(window, size[BUFFER], cond);
// }
// export function setWindowCollapsed_WindowPtr(window: ImGuiWindow, collapsed: boolean, cond: ImGuiCond): void {
//    imgui.igSetWindowCollapsed_WindowPtr(window, collapsed, cond);
// }
// export function setWindowHitTestHole(window: ImGuiWindow, pos: ImVec2, size: ImVec2): void {
//    imgui.igSetWindowHitTestHole(window, pos[BUFFER], size[BUFFER]);
// }
// export function windowRectAbsToRel(pOut: ImRect, window: ImGuiWindow, r: ImRect): void {
//    imgui.igWindowRectAbsToRel(pOut, window, r);
// }
// export function windowRectRelToAbs(pOut: ImRect, window: ImGuiWindow, r: ImRect): void {
//    imgui.igWindowRectRelToAbs(pOut, window, r);
// }
// export function focusWindow(window: ImGuiWindow): void {
//    imgui.igFocusWindow(window);
// }
// export function focusTopMostWindowUnderOne(under_this_window: ImGuiWindow, ignore_window: ImGuiWindow): void {
//    imgui.igFocusTopMostWindowUnderOne(under_this_window, ignore_window);
// }
// export function bringWindowToFocusFront(window: ImGuiWindow): void {
//    imgui.igBringWindowToFocusFront(window);
// }
// export function bringWindowToDisplayFront(window: ImGuiWindow): void {
//    imgui.igBringWindowToDisplayFront(window);
// }
// export function bringWindowToDisplayBack(window: ImGuiWindow): void {
//    imgui.igBringWindowToDisplayBack(window);
// }
// export function bringWindowToDisplayBehind(window: ImGuiWindow, above_window: ImGuiWindow): void {
//    imgui.igBringWindowToDisplayBehind(window, above_window);
// }
// export function findWindowDisplayIndex(window: ImGuiWindow): number {
//   return imgui.igFindWindowDisplayIndex(window);
// }
// export function findBottomMostVisibleWindowWithinBeginStack(window: ImGuiWindow): ImGuiWindow {
//   return imgui.igFindBottomMostVisibleWindowWithinBeginStack(window);
// }
// export function setCurrentFont(font: ImFont): void {
//    imgui.igSetCurrentFont(font);
// }
// export function getDefaultFont(): ImFont {
//   return imgui.igGetDefaultFont();
// }
// export function getForegroundDrawList_WindowPtr(window: ImGuiWindow): ImDrawList {
//   return imgui.igGetForegroundDrawList_WindowPtr(window);
// }
// export function initialize(): void {
//    imgui.igInitialize();
// }
// export function shutdown(): void {
//    imgui.igShutdown();
// }
// export function updateInputEvents(trickle_fast_inputs: boolean): void {
//    imgui.igUpdateInputEvents(trickle_fast_inputs);
// }
// export function updateHoveredWindowAndCaptureFlags(): void {
//    imgui.igUpdateHoveredWindowAndCaptureFlags();
// }
// export function startMouseMovingWindow(window: ImGuiWindow): void {
//    imgui.igStartMouseMovingWindow(window);
// }
// export function startMouseMovingWindowOrNode(window: ImGuiWindow, node: ImGuiDockNode, undock_floating_node: boolean): void {
//    imgui.igStartMouseMovingWindowOrNode(window, node, undock_floating_node);
// }
// export function updateMouseMovingWindowNewFrame(): void {
//    imgui.igUpdateMouseMovingWindowNewFrame();
// }
// export function updateMouseMovingWindowEndFrame(): void {
//    imgui.igUpdateMouseMovingWindowEndFrame();
// }
// export function addContextHook(context: ImGuiContext, hook: ImGuiContextHook): ImGuiID {
//   return imgui.igAddContextHook(context, hook);
// }
// export function removeContextHook(context: ImGuiContext, hook_to_remove: ImGuiID): void {
//    imgui.igRemoveContextHook(context, hook_to_remove);
// }
// export function translateWindowsInViewport(viewport: ImGuiViewportP, old_pos: ImVec2, new_pos: ImVec2): void {
//    imgui.igTranslateWindowsInViewport(viewport, old_pos[BUFFER], new_pos[BUFFER]);
// }
// export function scaleWindowsInViewport(viewport: ImGuiViewportP, scale: number): void {
//    imgui.igScaleWindowsInViewport(viewport, scale);
// }
// export function destroyPlatformWindow(viewport: ImGuiViewportP): void {
//    imgui.igDestroyPlatformWindow(viewport);
// }
// export function setWindowViewport(window: ImGuiWindow, viewport: ImGuiViewportP): void {
//    imgui.igSetWindowViewport(window, viewport);
// }
// export function setCurrentViewport(window: ImGuiWindow, viewport: ImGuiViewportP): void {
//    imgui.igSetCurrentViewport(window, viewport);
// }
// export function getViewportPlatformMonitor(viewport: ImGuiViewport): ImGuiPlatformMonitor {
//   return imgui.igGetViewportPlatformMonitor(viewport);
// }
// export function findHoveredViewportFromPlatformWindowStack(mouse_platform_pos: ImVec2): ImGuiViewportP {
//   return imgui.igFindHoveredViewportFromPlatformWindowStack(mouse_platform_pos[BUFFER]);
// }
// export function markIniSettingsDirty_Nil(): void {
//    imgui.igMarkIniSettingsDirty_Nil();
// }
// export function markIniSettingsDirty_WindowPtr(window: ImGuiWindow): void {
//    imgui.igMarkIniSettingsDirty_WindowPtr(window);
// }
// export function clearIniSettings(): void {
//    imgui.igClearIniSettings();
// }
// export function createNewWindowSettings(name: StringSource): ImGuiWindowSettings {
//   return imgui.igCreateNewWindowSettings(cString(name));
// }
// export function findWindowSettings(id: ImGuiID): ImGuiWindowSettings {
//   return imgui.igFindWindowSettings(id);
// }
// export function findOrCreateWindowSettings(name: StringSource): ImGuiWindowSettings {
//   return imgui.igFindOrCreateWindowSettings(cString(name));
// }
// export function addSettingsHandler(handler: ImGuiSettingsHandler): void {
//    imgui.igAddSettingsHandler(handler);
// }
// export function removeSettingsHandler(type_name: StringSource): void {
//    imgui.igRemoveSettingsHandler(cString(type_name));
// }
// export function findSettingsHandler(type_name: StringSource): ImGuiSettingsHandler {
//   return imgui.igFindSettingsHandler(cString(type_name));
// }
// export function localizeRegisterEntries(entries: ImGuiLocEntry, count: number): void {
//    imgui.igLocalizeRegisterEntries(entries, count);
// }
// export function setScrollX_WindowPtr(window: ImGuiWindow, scroll_x: number): void {
//    imgui.igSetScrollX_WindowPtr(window, scroll_x);
// }
// export function setScrollY_WindowPtr(window: ImGuiWindow, scroll_y: number): void {
//    imgui.igSetScrollY_WindowPtr(window, scroll_y);
// }
// export function setScrollFromPosX_WindowPtr(window: ImGuiWindow, local_x: number, center_x_ratio: number): void {
//    imgui.igSetScrollFromPosX_WindowPtr(window, local_x, center_x_ratio);
// }
// export function setScrollFromPosY_WindowPtr(window: ImGuiWindow, local_y: number, center_y_ratio: number): void {
//    imgui.igSetScrollFromPosY_WindowPtr(window, local_y, center_y_ratio);
// }
// export function scrollToItem(flags: ImGuiScrollFlags): void {
//    imgui.igScrollToItem(flags);
// }
// export function scrollToRect(window: ImGuiWindow, rect: ImRect, flags: ImGuiScrollFlags): void {
//    imgui.igScrollToRect(window, rect, flags);
// }
// export function scrollToRectEx(pOut: ImVec2, window: ImGuiWindow, rect: ImRect, flags: ImGuiScrollFlags): void {
//    imgui.igScrollToRectEx(pOut, window, rect, flags);
// }
// export function scrollToBringRectIntoView(window: ImGuiWindow, rect: ImRect): void {
//    imgui.igScrollToBringRectIntoView(window, rect);
// }
// export function getItemStatusFlags(): ImGuiItemStatusFlags {
//   return imgui.igGetItemStatusFlags();
// }
// export function getItemFlags(): ImGuiItemFlags {
//   return imgui.igGetItemFlags();
// }
// export function getActiveID(): ImGuiID {
//   return imgui.igGetActiveID();
// }
// export function getFocusID(): ImGuiID {
//   return imgui.igGetFocusID();
// }
// export function setActiveID(id: ImGuiID, window: ImGuiWindow): void {
//    imgui.igSetActiveID(id, window);
// }
// export function setFocusID(id: ImGuiID, window: ImGuiWindow): void {
//    imgui.igSetFocusID(id, window);
// }
// export function clearActiveID(): void {
//    imgui.igClearActiveID();
// }
// export function getHoveredID(): ImGuiID {
//   return imgui.igGetHoveredID();
// }
// export function setHoveredID(id: ImGuiID): void {
//    imgui.igSetHoveredID(id);
// }
// export function keepAliveID(id: ImGuiID): void {
//    imgui.igKeepAliveID(id);
// }
// export function markItemEdited(id: ImGuiID): void {
//    imgui.igMarkItemEdited(id);
// }
// export function pushOverrideID(id: ImGuiID): void {
//    imgui.igPushOverrideID(id);
// }
// export function getIDWithSeed(str_id_begin: StringSource, str_id_end: StringSource, seed: ImGuiID): ImGuiID {
//   return imgui.igGetIDWithSeed(cString(str_id_begin), cString(str_id_end), seed);
// }
// export function itemSize_Vec2(size: ImVec2, text_baseline_y: number): void {
//    imgui.igItemSize_Vec2(size[BUFFER], text_baseline_y);
// }
// export function itemSize_Rect(bb: ImRect, text_baseline_y: number): void {
//    imgui.igItemSize_Rect(bb, text_baseline_y);
// }
// export function itemAdd(bb: ImRect, id: ImGuiID, nav_bb: ImRect, extra_flags: ImGuiItemFlags): boolean {
//   return imgui.igItemAdd(bb, id, nav_bb, extra_flags);
// }
// export function itemHoverable(bb: ImRect, id: ImGuiID): boolean {
//   return imgui.igItemHoverable(bb, id);
// }
// export function isClippedEx(bb: ImRect, id: ImGuiID): boolean {
//   return imgui.igIsClippedEx(bb, id);
// }
// export function setLastItemData(item_id: ImGuiID, in_flags: ImGuiItemFlags, status_flags: ImGuiItemStatusFlags, item_rect: ImRect): void {
//    imgui.igSetLastItemData(item_id, in_flags, status_flags, item_rect);
// }
// export function calcItemSize(pOut: ImVec2, size: ImVec2, default_w: number, default_h: number): void {
//    imgui.igCalcItemSize(pOut, size[BUFFER], default_w, default_h);
// }
// export function calcWrapWidthForPos(pos: ImVec2, wrap_pos_x: number): number {
//   return imgui.igCalcWrapWidthForPos(pos[BUFFER], wrap_pos_x);
// }
// export function pushMultiItemsWidths(components: number, width_full: number): void {
//    imgui.igPushMultiItemsWidths(components, width_full);
// }
// export function isItemToggledSelection(): boolean {
//   return imgui.igIsItemToggledSelection();
// }
// export function getContentRegionMaxAbs(pOut: ImVec2): void {
//    imgui.igGetContentRegionMaxAbs(pOut);
// }
// export function shrinkWidths(items: ImGuiShrinkWidthItem, count: number, width_excess: number): void {
//    imgui.igShrinkWidths(items, count, width_excess);
// }
// export function pushItemFlag(option: ImGuiItemFlags, enabled: boolean): void {
//    imgui.igPushItemFlag(option, enabled);
// }
// export function popItemFlag(): void {
//    imgui.igPopItemFlag();
// }
// export function logToBuffer(auto_open_depth: number): void {
//    imgui.igLogToBuffer(auto_open_depth);
// }
// export function logRenderedText(ref_pos: ImVec2, text: StringSource, text_end: StringSource): void {
//    imgui.igLogRenderedText(ref_pos, cString(text), cString(text_end));
// }
// export function logSetNextTextDecoration(prefix: StringSource, suffix: StringSource): void {
//    imgui.igLogSetNextTextDecoration(cString(prefix), cString(suffix));
// }
// export function beginChildEx(name: StringSource, id: ImGuiID, size_arg: ImVec2, border: boolean, flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginChildEx(cString(name), id, size_arg[BUFFER], border, flags);
// }
// export function openPopupEx(id: ImGuiID, popup_flags: ImGuiPopupFlags): void {
//    imgui.igOpenPopupEx(id, popup_flags);
// }
// export function closePopupToLevel(remaining: number, restore_focus_to_window_under_popup: boolean): void {
//    imgui.igClosePopupToLevel(remaining, restore_focus_to_window_under_popup);
// }
// export function closePopupsOverWindow(ref_window: ImGuiWindow, restore_focus_to_window_under_popup: boolean): void {
//    imgui.igClosePopupsOverWindow(ref_window, restore_focus_to_window_under_popup);
// }
// export function closePopupsExceptModals(): void {
//    imgui.igClosePopupsExceptModals();
// }
// export function isPopupOpen_ID(id: ImGuiID, popup_flags: ImGuiPopupFlags): boolean {
//   return imgui.igIsPopupOpen_ID(id, popup_flags);
// }
// export function beginPopupEx(id: ImGuiID, extra_flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginPopupEx(id, extra_flags);
// }
// export function beginTooltipEx(tooltip_flags: ImGuiTooltipFlags, extra_window_flags: ImGuiWindowFlags): void {
//    imgui.igBeginTooltipEx(tooltip_flags, extra_window_flags);
// }
// export function getPopupAllowedExtentRect(pOut: ImRect, window: ImGuiWindow): void {
//    imgui.igGetPopupAllowedExtentRect(pOut, window);
// }
// export function getTopMostPopupModal(): ImGuiWindow {
//   return imgui.igGetTopMostPopupModal();
// }
// export function getTopMostAndVisiblePopupModal(): ImGuiWindow {
//   return imgui.igGetTopMostAndVisiblePopupModal();
// }
// export function findBestWindowPosForPopup(pOut: ImVec2, window: ImGuiWindow): void {
//    imgui.igFindBestWindowPosForPopup(pOut, window);
// }
// export function beginViewportSideBar(name: StringSource, viewport: ImGuiViewport, dir: ImGuiDir, size: number, window_flags: ImGuiWindowFlags): boolean {
//   return imgui.igBeginViewportSideBar(cString(name), viewport, dir, size, window_flags);
// }
// export function beginMenuEx(label: StringSource, icon: StringSource, enabled: boolean): boolean {
//   return imgui.igBeginMenuEx(cString(label), cString(icon), enabled);
// }
// export function menuItemEx(label: StringSource, icon: StringSource, shortcut: StringSource, selected: boolean, enabled: boolean): boolean {
//   return imgui.igMenuItemEx(cString(label), cString(icon), cString(shortcut), selected, enabled);
// }
// export function beginComboPopup(popup_id: ImGuiID, bb: ImRect, flags: ImGuiComboFlags): boolean {
//   return imgui.igBeginComboPopup(popup_id, bb, flags);
// }
// export function beginComboPreview(): boolean {
//   return imgui.igBeginComboPreview();
// }
// export function endComboPreview(): void {
//    imgui.igEndComboPreview();
// }
// export function navInitWindow(window: ImGuiWindow, force_reinit: boolean): void {
//    imgui.igNavInitWindow(window, force_reinit);
// }
// export function navInitRequestApplyResult(): void {
//    imgui.igNavInitRequestApplyResult();
// }
// export function navMoveRequestButNoResultYet(): boolean {
//   return imgui.igNavMoveRequestButNoResultYet();
// }
// export function navMoveRequestSubmit(move_dir: ImGuiDir, clip_dir: ImGuiDir, move_flags: ImGuiNavMoveFlags, scroll_flags: ImGuiScrollFlags): void {
//    imgui.igNavMoveRequestSubmit(move_dir, clip_dir, move_flags, scroll_flags);
// }
// export function navMoveRequestForward(move_dir: ImGuiDir, clip_dir: ImGuiDir, move_flags: ImGuiNavMoveFlags, scroll_flags: ImGuiScrollFlags): void {
//    imgui.igNavMoveRequestForward(move_dir, clip_dir, move_flags, scroll_flags);
// }
// export function navMoveRequestResolveWithLastItem(result: ImGuiNavItemData): void {
//    imgui.igNavMoveRequestResolveWithLastItem(result);
// }
// export function navMoveRequestCancel(): void {
//    imgui.igNavMoveRequestCancel();
// }
// export function navMoveRequestApplyResult(): void {
//    imgui.igNavMoveRequestApplyResult();
// }
// export function navMoveRequestTryWrapping(window: ImGuiWindow, move_flags: ImGuiNavMoveFlags): void {
//    imgui.igNavMoveRequestTryWrapping(window, move_flags);
// }
// export function activateItem(id: ImGuiID): void {
//    imgui.igActivateItem(id);
// }
// export function setNavWindow(window: ImGuiWindow): void {
//    imgui.igSetNavWindow(window);
// }
// export function isNamedKey(key: ImGuiKey): boolean {
//   return imgui.igIsNamedKey(key);
// }
// export function isNamedKeyOrModKey(key: ImGuiKey): boolean {
//   return imgui.igIsNamedKeyOrModKey(key);
// }
// export function isLegacyKey(key: ImGuiKey): boolean {
//   return imgui.igIsLegacyKey(key);
// }
// export function isKeyboardKey(key: ImGuiKey): boolean {
//   return imgui.igIsKeyboardKey(key);
// }
// export function isGamepadKey(key: ImGuiKey): boolean {
//   return imgui.igIsGamepadKey(key);
// }
// export function isMouseKey(key: ImGuiKey): boolean {
//   return imgui.igIsMouseKey(key);
// }
// export function isAliasKey(key: ImGuiKey): boolean {
//   return imgui.igIsAliasKey(key);
// }
// export function convertShortcutMod(key_chord: ImGuiKeyChord): ImGuiKeyChord {
//   return imgui.igConvertShortcutMod(key_chord);
// }
// export function convertSingleModFlagToKey(key: ImGuiKey): ImGuiKey {
//   return imgui.igConvertSingleModFlagToKey(key);
// }
// export function getKeyData(key: ImGuiKey): ImGuiKeyData {
//   return imgui.igGetKeyData(key);
// }
// export function getKeyChordName(key_chord: ImGuiKeyChord, out_buf: StringSource, out_buf_size: number): void {
//    imgui.igGetKeyChordName(key_chord, cString(out_buf), out_buf_size);
// }
// export function mouseButtonToKey(button: ImGuiMouseButton): ImGuiKey {
//   return imgui.igMouseButtonToKey(button);
// }
// export function isMouseDragPastThreshold(button: ImGuiMouseButton, lock_threshold: number): boolean {
//   return imgui.igIsMouseDragPastThreshold(button, lock_threshold);
// }
// export function getKeyMagnitude2d(pOut: ImVec2, key_left: ImGuiKey, key_right: ImGuiKey, key_up: ImGuiKey, key_down: ImGuiKey): void {
//    imgui.igGetKeyMagnitude2d(pOut, key_left, key_right, key_up, key_down);
// }
// export function getNavTweakPressedAmount(axis: ImGuiAxis): number {
//   return imgui.igGetNavTweakPressedAmount(axis);
// }
// export function calcTypematicRepeatAmount(t0: number, t1: number, repeat_delay: number, repeat_rate: number): number {
//   return imgui.igCalcTypematicRepeatAmount(t0, t1, repeat_delay, repeat_rate);
// }
// export function getTypematicRepeatRate(flags: ImGuiInputFlags, repeat_delay: Float32Array, repeat_rate: Float32Array): void {
//    imgui.igGetTypematicRepeatRate(flags, repeat_delay, repeat_rate);
// }
// export function setActiveIdUsingAllKeyboardKeys(): void {
//    imgui.igSetActiveIdUsingAllKeyboardKeys();
// }
// export function isActiveIdUsingNavDir(dir: ImGuiDir): boolean {
//   return imgui.igIsActiveIdUsingNavDir(dir);
// }
// export function getKeyOwner(key: ImGuiKey): ImGuiID {
//   return imgui.igGetKeyOwner(key);
// }
// export function setKeyOwner(key: ImGuiKey, owner_id: ImGuiID, flags: ImGuiInputFlags): void {
//    imgui.igSetKeyOwner(key, owner_id, flags);
// }
// export function setItemKeyOwner(key: ImGuiKey, flags: ImGuiInputFlags): void {
//    imgui.igSetItemKeyOwner(key, flags);
// }
// export function testKeyOwner(key: ImGuiKey, owner_id: ImGuiID): boolean {
//   return imgui.igTestKeyOwner(key, owner_id);
// }
// export function getKeyOwnerData(key: ImGuiKey): ImGuiKeyOwnerData {
//   return imgui.igGetKeyOwnerData(key);
// }
// export function isKeyDown_ID(key: ImGuiKey, owner_id: ImGuiID): boolean {
//   return imgui.igIsKeyDown_ID(key, owner_id);
// }
// export function isKeyPressed_ID(key: ImGuiKey, owner_id: ImGuiID, flags: ImGuiInputFlags): boolean {
//   return imgui.igIsKeyPressed_ID(key, owner_id, flags);
// }
// export function isKeyReleased_ID(key: ImGuiKey, owner_id: ImGuiID): boolean {
//   return imgui.igIsKeyReleased_ID(key, owner_id);
// }
// export function isMouseDown_ID(button: ImGuiMouseButton, owner_id: ImGuiID): boolean {
//   return imgui.igIsMouseDown_ID(button, owner_id);
// }
// export function isMouseClicked_ID(button: ImGuiMouseButton, owner_id: ImGuiID, flags: ImGuiInputFlags): boolean {
//   return imgui.igIsMouseClicked_ID(button, owner_id, flags);
// }
// export function isMouseReleased_ID(button: ImGuiMouseButton, owner_id: ImGuiID): boolean {
//   return imgui.igIsMouseReleased_ID(button, owner_id);
// }
// export function shortcut(key_chord: ImGuiKeyChord, owner_id: ImGuiID, flags: ImGuiInputFlags): boolean {
//   return imgui.igShortcut(key_chord, owner_id, flags);
// }
// export function setShortcutRouting(key_chord: ImGuiKeyChord, owner_id: ImGuiID, flags: ImGuiInputFlags): boolean {
//   return imgui.igSetShortcutRouting(key_chord, owner_id, flags);
// }
// export function testShortcutRouting(key_chord: ImGuiKeyChord, owner_id: ImGuiID): boolean {
//   return imgui.igTestShortcutRouting(key_chord, owner_id);
// }
// export function getShortcutRoutingData(key_chord: ImGuiKeyChord): ImGuiKeyRoutingData {
//   return imgui.igGetShortcutRoutingData(key_chord);
// }
// export function dockContextInitialize(ctx: ImGuiContext): void {
//    imgui.igDockContextInitialize(ctx);
// }
// export function dockContextShutdown(ctx: ImGuiContext): void {
//    imgui.igDockContextShutdown(ctx);
// }
// export function dockContextClearNodes(ctx: ImGuiContext, root_id: ImGuiID, clear_settings_refs: boolean): void {
//    imgui.igDockContextClearNodes(ctx, root_id, clear_settings_refs);
// }
// export function dockContextRebuildNodes(ctx: ImGuiContext): void {
//    imgui.igDockContextRebuildNodes(ctx);
// }
// export function dockContextNewFrameUpdateUndocking(ctx: ImGuiContext): void {
//    imgui.igDockContextNewFrameUpdateUndocking(ctx);
// }
// export function dockContextNewFrameUpdateDocking(ctx: ImGuiContext): void {
//    imgui.igDockContextNewFrameUpdateDocking(ctx);
// }
// export function dockContextEndFrame(ctx: ImGuiContext): void {
//    imgui.igDockContextEndFrame(ctx);
// }
// export function dockContextGenNodeID(ctx: ImGuiContext): ImGuiID {
//   return imgui.igDockContextGenNodeID(ctx);
// }
// export function dockContextQueueDock(ctx: ImGuiContext, target: ImGuiWindow, target_node: ImGuiDockNode, payload: ImGuiWindow, split_dir: ImGuiDir, split_ratio: number, split_outer: boolean): void {
//    imgui.igDockContextQueueDock(ctx, target, target_node, payload, split_dir, split_ratio, split_outer);
// }
// export function dockContextQueueUndockWindow(ctx: ImGuiContext, window: ImGuiWindow): void {
//    imgui.igDockContextQueueUndockWindow(ctx, window);
// }
// export function dockContextQueueUndockNode(ctx: ImGuiContext, node: ImGuiDockNode): void {
//    imgui.igDockContextQueueUndockNode(ctx, node);
// }
// export function dockContextCalcDropPosForDocking(target: ImGuiWindow, target_node: ImGuiDockNode, payload_window: ImGuiWindow, payload_node: ImGuiDockNode, split_dir: ImGuiDir, split_outer: boolean, out_pos: ImVec2): boolean {
//   return imgui.igDockContextCalcDropPosForDocking(target, target_node, payload_window, payload_node, split_dir, split_outer, out_pos);
// }
// export function dockContextFindNodeByID(ctx: ImGuiContext, id: ImGuiID): ImGuiDockNode {
//   return imgui.igDockContextFindNodeByID(ctx, id);
// }
// export function dockNodeBeginAmendTabBar(node: ImGuiDockNode): boolean {
//   return imgui.igDockNodeBeginAmendTabBar(node);
// }
// export function dockNodeEndAmendTabBar(): void {
//    imgui.igDockNodeEndAmendTabBar();
// }
// export function dockNodeGetRootNode(node: ImGuiDockNode): ImGuiDockNode {
//   return imgui.igDockNodeGetRootNode(node);
// }
// export function dockNodeIsInHierarchyOf(node: ImGuiDockNode, parent: ImGuiDockNode): boolean {
//   return imgui.igDockNodeIsInHierarchyOf(node, parent);
// }
// export function dockNodeGetDepth(node: ImGuiDockNode): number {
//   return imgui.igDockNodeGetDepth(node);
// }
// export function dockNodeGetWindowMenuButtonId(node: ImGuiDockNode): ImGuiID {
//   return imgui.igDockNodeGetWindowMenuButtonId(node);
// }
// export function getWindowDockNode(): ImGuiDockNode {
//   return imgui.igGetWindowDockNode();
// }
// export function getWindowAlwaysWantOwnTabBar(window: ImGuiWindow): boolean {
//   return imgui.igGetWindowAlwaysWantOwnTabBar(window);
// }
// export function beginDocked(window: ImGuiWindow, open?: Uint8Array): void {
//    imgui.igBeginDocked(window, open ?? null);
// }
// export function beginDockableDragDropSource(window: ImGuiWindow): void {
//    imgui.igBeginDockableDragDropSource(window);
// }
// export function beginDockableDragDropTarget(window: ImGuiWindow): void {
//    imgui.igBeginDockableDragDropTarget(window);
// }
// export function setWindowDock(window: ImGuiWindow, dock_id: ImGuiID, cond: ImGuiCond): void {
//    imgui.igSetWindowDock(window, dock_id, cond);
// }
// export function dockBuilderDockWindow(window_name: StringSource, node_id: ImGuiID): void {
//    imgui.igDockBuilderDockWindow(cString(window_name), node_id);
// }
// export function dockBuilderGetNode(node_id: ImGuiID): ImGuiDockNode {
//   return imgui.igDockBuilderGetNode(node_id);
// }
// export function dockBuilderGetCentralNode(node_id: ImGuiID): ImGuiDockNode {
//   return imgui.igDockBuilderGetCentralNode(node_id);
// }
// export function dockBuilderAddNode(node_id: ImGuiID, flags: ImGuiDockNodeFlags): ImGuiID {
//   return imgui.igDockBuilderAddNode(node_id, flags);
// }
// export function dockBuilderRemoveNode(node_id: ImGuiID): void {
//    imgui.igDockBuilderRemoveNode(node_id);
// }
// export function dockBuilderRemoveNodeDockedWindows(node_id: ImGuiID, clear_settings_refs: boolean): void {
//    imgui.igDockBuilderRemoveNodeDockedWindows(node_id, clear_settings_refs);
// }
// export function dockBuilderRemoveNodeChildNodes(node_id: ImGuiID): void {
//    imgui.igDockBuilderRemoveNodeChildNodes(node_id);
// }
// export function dockBuilderSetNodePos(node_id: ImGuiID, pos: ImVec2): void {
//    imgui.igDockBuilderSetNodePos(node_id, pos[BUFFER]);
// }
// export function dockBuilderSetNodeSize(node_id: ImGuiID, size: ImVec2): void {
//    imgui.igDockBuilderSetNodeSize(node_id, size[BUFFER]);
// }
// export function dockBuilderSplitNode(node_id: ImGuiID, split_dir: ImGuiDir, size_ratio_for_node_at_dir: number, out_id_at_dir: ImGuiID, out_id_at_opposite_dir: ImGuiID): ImGuiID {
//   return imgui.igDockBuilderSplitNode(node_id, split_dir, size_ratio_for_node_at_dir, out_id_at_dir, out_id_at_opposite_dir);
// }
// export function dockBuilderCopyDockSpace(src_dockspace_id: ImGuiID, dst_dockspace_id: ImGuiID, in_window_remap_pairs: ImVector__charPtr): void {
//    imgui.igDockBuilderCopyDockSpace(src_dockspace_id, dst_dockspace_id, in_window_remap_pairs);
// }
// export function dockBuilderCopyNode(src_node_id: ImGuiID, dst_node_id: ImGuiID, out_node_remap_pairs: ImVector_ImGuiID): void {
//    imgui.igDockBuilderCopyNode(src_node_id, dst_node_id, out_node_remap_pairs);
// }
// export function dockBuilderCopyWindowSettings(src_name: StringSource, dst_name: StringSource): void {
//    imgui.igDockBuilderCopyWindowSettings(cString(src_name), cString(dst_name));
// }
// export function dockBuilderFinish(node_id: ImGuiID): void {
//    imgui.igDockBuilderFinish(node_id);
// }
// export function pushFocusScope(id: ImGuiID): void {
//    imgui.igPushFocusScope(id);
// }
// export function popFocusScope(): void {
//    imgui.igPopFocusScope();
// }
// export function getCurrentFocusScope(): ImGuiID {
//   return imgui.igGetCurrentFocusScope();
// }
// export function isDragDropActive(): boolean {
//   return imgui.igIsDragDropActive();
// }
// export function beginDragDropTargetCustom(bb: ImRect, id: ImGuiID): boolean {
//   return imgui.igBeginDragDropTargetCustom(bb, id);
// }
// export function clearDragDrop(): void {
//    imgui.igClearDragDrop();
// }
// export function isDragDropPayloadBeingAccepted(): boolean {
//   return imgui.igIsDragDropPayloadBeingAccepted();
// }
// export function renderDragDropTargetRect(bb: ImRect): void {
//    imgui.igRenderDragDropTargetRect(bb);
// }
// export function setWindowClipRectBeforeSetChannel(window: ImGuiWindow, clip_rect: ImRect): void {
//    imgui.igSetWindowClipRectBeforeSetChannel(window, clip_rect);
// }
// export function beginColumns(str_id: StringSource, count: number, flags: ImGuiOldColumnFlags): void {
//    imgui.igBeginColumns(cString(str_id), count, flags);
// }
// export function endColumns(): void {
//    imgui.igEndColumns();
// }
// export function pushColumnClipRect(column_index: number): void {
//    imgui.igPushColumnClipRect(column_index);
// }
// export function pushColumnsBackground(): void {
//    imgui.igPushColumnsBackground();
// }
// export function popColumnsBackground(): void {
//    imgui.igPopColumnsBackground();
// }
// export function getColumnsID(str_id: StringSource, count: number): ImGuiID {
//   return imgui.igGetColumnsID(cString(str_id), count);
// }
// export function findOrCreateColumns(window: ImGuiWindow, id: ImGuiID): ImGuiOldColumns {
//   return imgui.igFindOrCreateColumns(window, id);
// }
// export function getColumnOffsetFromNorm(columns: ImGuiOldColumns, offset_norm: number): number {
//   return imgui.igGetColumnOffsetFromNorm(columns, offset_norm);
// }
// export function getColumnNormFromOffset(columns: ImGuiOldColumns, offset: number): number {
//   return imgui.igGetColumnNormFromOffset(columns, offset);
// }
// export function tableOpenContextMenu(column_n: number): void {
//    imgui.igTableOpenContextMenu(column_n);
// }
// export function tableSetColumnWidth(column_n: number, width: number): void {
//    imgui.igTableSetColumnWidth(column_n, width);
// }
// export function tableSetColumnSortDirection(column_n: number, sort_direction: ImGuiSortDirection, append_to_sort_specs: boolean): void {
//    imgui.igTableSetColumnSortDirection(column_n, sort_direction, append_to_sort_specs);
// }
// export function tableGetHoveredColumn(): number {
//   return imgui.igTableGetHoveredColumn();
// }
// export function tableGetHeaderRowHeight(): number {
//   return imgui.igTableGetHeaderRowHeight();
// }
// export function tablePushBackgroundChannel(): void {
//    imgui.igTablePushBackgroundChannel();
// }
// export function tablePopBackgroundChannel(): void {
//    imgui.igTablePopBackgroundChannel();
// }
// export function getCurrentTable(): ImGuiTable {
//   return imgui.igGetCurrentTable();
// }
// export function tableFindByID(id: ImGuiID): ImGuiTable {
//   return imgui.igTableFindByID(id);
// }
// export function beginTableEx(name: StringSource, id: ImGuiID, columns_count: number, flags: ImGuiTableFlags, outer_size: ImVec2, inner_width: number): boolean {
//   return imgui.igBeginTableEx(cString(name), id, columns_count, flags, outer_size[BUFFER], inner_width);
// }
// export function tableBeginInitMemory(table: ImGuiTable, columns_count: number): void {
//    imgui.igTableBeginInitMemory(table, columns_count);
// }
// export function tableBeginApplyRequests(table: ImGuiTable): void {
//    imgui.igTableBeginApplyRequests(table);
// }
// export function tableSetupDrawChannels(table: ImGuiTable): void {
//    imgui.igTableSetupDrawChannels(table);
// }
// export function tableUpdateLayout(table: ImGuiTable): void {
//    imgui.igTableUpdateLayout(table);
// }
// export function tableUpdateBorders(table: ImGuiTable): void {
//    imgui.igTableUpdateBorders(table);
// }
// export function tableUpdateColumnsWeightFromWidth(table: ImGuiTable): void {
//    imgui.igTableUpdateColumnsWeightFromWidth(table);
// }
// export function tableDrawBorders(table: ImGuiTable): void {
//    imgui.igTableDrawBorders(table);
// }
// export function tableDrawContextMenu(table: ImGuiTable): void {
//    imgui.igTableDrawContextMenu(table);
// }
// export function tableBeginContextMenuPopup(table: ImGuiTable): boolean {
//   return imgui.igTableBeginContextMenuPopup(table);
// }
// export function tableMergeDrawChannels(table: ImGuiTable): void {
//    imgui.igTableMergeDrawChannels(table);
// }
// export function tableGetInstanceData(table: ImGuiTable, instance_no: number): ImGuiTableInstanceData {
//   return imgui.igTableGetInstanceData(table, instance_no);
// }
// export function tableSortSpecsSanitize(table: ImGuiTable): void {
//    imgui.igTableSortSpecsSanitize(table);
// }
// export function tableSortSpecsBuild(table: ImGuiTable): void {
//    imgui.igTableSortSpecsBuild(table);
// }
// export function tableGetColumnNextSortDirection(column: ImGuiTableColumn): ImGuiSortDirection {
//   return imgui.igTableGetColumnNextSortDirection(column);
// }
// export function tableFixColumnSortDirection(table: ImGuiTable, column: ImGuiTableColumn): void {
//    imgui.igTableFixColumnSortDirection(table, column);
// }
// export function tableGetColumnWidthAuto(table: ImGuiTable, column: ImGuiTableColumn): number {
//   return imgui.igTableGetColumnWidthAuto(table, column);
// }
// export function tableBeginRow(table: ImGuiTable): void {
//    imgui.igTableBeginRow(table);
// }
// export function tableEndRow(table: ImGuiTable): void {
//    imgui.igTableEndRow(table);
// }
// export function tableBeginCell(table: ImGuiTable, column_n: number): void {
//    imgui.igTableBeginCell(table, column_n);
// }
// export function tableEndCell(table: ImGuiTable): void {
//    imgui.igTableEndCell(table);
// }
// export function tableGetCellBgRect(pOut: ImRect, table: ImGuiTable, column_n: number): void {
//    imgui.igTableGetCellBgRect(pOut, table, column_n);
// }
// export function tableGetColumnName_TablePtr(table: ImGuiTable, column_n: number): string {
//   return imgui.igTableGetColumnName_TablePtr(table, column_n);
// }
// export function tableGetColumnResizeID(table: ImGuiTable, column_n: number, instance_no: number): ImGuiID {
//   return imgui.igTableGetColumnResizeID(table, column_n, instance_no);
// }
// export function tableGetMaxColumnWidth(table: ImGuiTable, column_n: number): number {
//   return imgui.igTableGetMaxColumnWidth(table, column_n);
// }
// export function tableSetColumnWidthAutoSingle(table: ImGuiTable, column_n: number): void {
//    imgui.igTableSetColumnWidthAutoSingle(table, column_n);
// }
// export function tableSetColumnWidthAutoAll(table: ImGuiTable): void {
//    imgui.igTableSetColumnWidthAutoAll(table);
// }
// export function tableRemove(table: ImGuiTable): void {
//    imgui.igTableRemove(table);
// }
// export function tableGcCompactTransientBuffers_TablePtr(table: ImGuiTable): void {
//    imgui.igTableGcCompactTransientBuffers_TablePtr(table);
// }
// export function tableGcCompactTransientBuffers_TableTempDataPtr(table: ImGuiTableTempData): void {
//    imgui.igTableGcCompactTransientBuffers_TableTempDataPtr(table);
// }
// export function tableGcCompactSettings(): void {
//    imgui.igTableGcCompactSettings();
// }
// export function tableLoadSettings(table: ImGuiTable): void {
//    imgui.igTableLoadSettings(table);
// }
// export function tableSaveSettings(table: ImGuiTable): void {
//    imgui.igTableSaveSettings(table);
// }
// export function tableResetSettings(table: ImGuiTable): void {
//    imgui.igTableResetSettings(table);
// }
// export function tableGetBoundSettings(table: ImGuiTable): ImGuiTableSettings {
//   return imgui.igTableGetBoundSettings(table);
// }
// export function tableSettingsAddSettingsHandler(): void {
//    imgui.igTableSettingsAddSettingsHandler();
// }
// export function tableSettingsCreate(id: ImGuiID, columns_count: number): ImGuiTableSettings {
//   return imgui.igTableSettingsCreate(id, columns_count);
// }
// export function tableSettingsFindByID(id: ImGuiID): ImGuiTableSettings {
//   return imgui.igTableSettingsFindByID(id);
// }
// export function beginTabBarEx(tab_bar: ImGuiTabBar, bb: ImRect, flags: ImGuiTabBarFlags, dock_node: ImGuiDockNode): boolean {
//   return imgui.igBeginTabBarEx(tab_bar, bb, flags, dock_node);
// }
// export function tabBarFindTabByID(tab_bar: ImGuiTabBar, tab_id: ImGuiID): ImGuiTabItem {
//   return imgui.igTabBarFindTabByID(tab_bar, tab_id);
// }
// export function tabBarFindMostRecentlySelectedTabForActiveWindow(tab_bar: ImGuiTabBar): ImGuiTabItem {
//   return imgui.igTabBarFindMostRecentlySelectedTabForActiveWindow(tab_bar);
// }
// export function tabBarAddTab(tab_bar: ImGuiTabBar, tab_flags: ImGuiTabItemFlags, window: ImGuiWindow): void {
//    imgui.igTabBarAddTab(tab_bar, tab_flags, window);
// }
// export function tabBarRemoveTab(tab_bar: ImGuiTabBar, tab_id: ImGuiID): void {
//    imgui.igTabBarRemoveTab(tab_bar, tab_id);
// }
// export function tabBarCloseTab(tab_bar: ImGuiTabBar, tab: ImGuiTabItem): void {
//    imgui.igTabBarCloseTab(tab_bar, tab);
// }
// export function tabBarQueueReorder(tab_bar: ImGuiTabBar, tab: ImGuiTabItem, offset: number): void {
//    imgui.igTabBarQueueReorder(tab_bar, tab, offset);
// }
// export function tabBarQueueReorderFromMousePos(tab_bar: ImGuiTabBar, tab: ImGuiTabItem, mouse_pos: ImVec2): void {
//    imgui.igTabBarQueueReorderFromMousePos(tab_bar, tab, mouse_pos[BUFFER]);
// }
// export function tabBarProcessReorder(tab_bar: ImGuiTabBar): boolean {
//   return imgui.igTabBarProcessReorder(tab_bar);
// }
// export function tabItemEx(tab_bar: ImGuiTabBar, label: StringSource, open?: Uint8Array, flags: ImGuiTabItemFlags, docked_window: ImGuiWindow): boolean {
//   return imgui.igTabItemEx(tab_bar, cString(label), open ?? null, flags, docked_window);
// }
// export function tabItemCalcSize_Str(pOut: ImVec2, label: StringSource, has_close_button_or_unsaved_marker: boolean): void {
//    imgui.igTabItemCalcSize_Str(pOut, cString(label), has_close_button_or_unsaved_marker);
// }
// export function tabItemCalcSize_WindowPtr(pOut: ImVec2, window: ImGuiWindow): void {
//    imgui.igTabItemCalcSize_WindowPtr(pOut, window);
// }
// export function tabItemBackground(draw_list: ImDrawList, bb: ImRect, flags: ImGuiTabItemFlags, col: ImU32): void {
//    imgui.igTabItemBackground(draw_list, bb, flags, col);
// }
// export function tabItemLabelAndCloseButton(draw_list: ImDrawList, bb: ImRect, flags: ImGuiTabItemFlags, frame_padding: ImVec2, label: StringSource, tab_id: ImGuiID, close_button_id: ImGuiID, is_contents_visible: boolean, out_just_closed?: Uint8Array, out_text_clipped?: Uint8Array): void {
//    imgui.igTabItemLabelAndCloseButton(draw_list, bb, flags, frame_padding[BUFFER], cString(label), tab_id, close_button_id, is_contents_visible, out_just_closed ?? null, out_text_clipped ?? null);
// }
// export function renderText(pos: ImVec2, text: StringSource, text_end: StringSource, hide_text_after_hash: boolean): void {
//    imgui.igRenderText(pos[BUFFER], cString(text), cString(text_end), hide_text_after_hash);
// }
// export function renderTextWrapped(pos: ImVec2, text: StringSource, text_end: StringSource, wrap_width: number): void {
//    imgui.igRenderTextWrapped(pos[BUFFER], cString(text), cString(text_end), wrap_width);
// }
// export function renderTextClipped(pos_min: ImVec2, pos_max: ImVec2, text: StringSource, text_end: StringSource, text_size_if_known: ImVec2, align: ImVec2, clip_rect: ImRect): void {
//    imgui.igRenderTextClipped(pos_min[BUFFER], pos_max[BUFFER], cString(text), cString(text_end), text_size_if_known, align[BUFFER], clip_rect);
// }
// export function renderTextClippedEx(draw_list: ImDrawList, pos_min: ImVec2, pos_max: ImVec2, text: StringSource, text_end: StringSource, text_size_if_known: ImVec2, align: ImVec2, clip_rect: ImRect): void {
//    imgui.igRenderTextClippedEx(draw_list, pos_min[BUFFER], pos_max[BUFFER], cString(text), cString(text_end), text_size_if_known, align[BUFFER], clip_rect);
// }
// export function renderTextEllipsis(draw_list: ImDrawList, pos_min: ImVec2, pos_max: ImVec2, clip_max_x: number, ellipsis_max_x: number, text: StringSource, text_end: StringSource, text_size_if_known: ImVec2): void {
//    imgui.igRenderTextEllipsis(draw_list, pos_min[BUFFER], pos_max[BUFFER], clip_max_x, ellipsis_max_x, cString(text), cString(text_end), text_size_if_known);
// }
// export function renderFrame(min: ImVec2, max: ImVec2, fill_col: ImU32, border: boolean, rounding: number): void {
//    imgui.igRenderFrame(min[BUFFER], max[BUFFER], fill_col, border, rounding);
// }
// export function renderFrameBorder(min: ImVec2, max: ImVec2, rounding: number): void {
//    imgui.igRenderFrameBorder(min[BUFFER], max[BUFFER], rounding);
// }
// export function renderColorRectWithAlphaCheckerboard(draw_list: ImDrawList, min: ImVec2, max: ImVec2, fill_col: ImU32, grid_step: number, grid_off: ImVec2, rounding: number, flags: ImDrawFlags): void {
//    imgui.igRenderColorRectWithAlphaCheckerboard(draw_list, min[BUFFER], max[BUFFER], fill_col, grid_step, grid_off[BUFFER], rounding, flags);
// }
// export function renderNavHighlight(bb: ImRect, id: ImGuiID, flags: ImGuiNavHighlightFlags): void {
//    imgui.igRenderNavHighlight(bb, id, flags);
// }
// export function findRenderedTextEnd(text: StringSource, text_end: StringSource): string {
//   return imgui.igFindRenderedTextEnd(cString(text), cString(text_end));
// }
// export function renderMouseCursor(pos: ImVec2, scale: number, mouse_cursor: ImGuiMouseCursor, col_fill: ImU32, col_border: ImU32, col_shadow: ImU32): void {
//    imgui.igRenderMouseCursor(pos[BUFFER], scale, mouse_cursor, col_fill, col_border, col_shadow);
// }
// export function renderArrow(draw_list: ImDrawList, pos: ImVec2, col: ImU32, dir: ImGuiDir, scale: number): void {
//    imgui.igRenderArrow(draw_list, pos[BUFFER], col, dir, scale);
// }
// export function renderBullet(draw_list: ImDrawList, pos: ImVec2, col: ImU32): void {
//    imgui.igRenderBullet(draw_list, pos[BUFFER], col);
// }
// export function renderCheckMark(draw_list: ImDrawList, pos: ImVec2, col: ImU32, sz: number): void {
//    imgui.igRenderCheckMark(draw_list, pos[BUFFER], col, sz);
// }
// export function renderArrowPointingAt(draw_list: ImDrawList, pos: ImVec2, half_sz: ImVec2, direction: ImGuiDir, col: ImU32): void {
//    imgui.igRenderArrowPointingAt(draw_list, pos[BUFFER], half_sz[BUFFER], direction, col);
// }
// export function renderArrowDockMenu(draw_list: ImDrawList, min: ImVec2, sz: number, col: ImU32): void {
//    imgui.igRenderArrowDockMenu(draw_list, min[BUFFER], sz, col);
// }
// export function renderRectFilledRangeH(draw_list: ImDrawList, rect: ImRect, col: ImU32, x_start_norm: number, x_end_norm: number, rounding: number): void {
//    imgui.igRenderRectFilledRangeH(draw_list, rect, col, x_start_norm, x_end_norm, rounding);
// }
// export function renderRectFilledWithHole(draw_list: ImDrawList, outer: ImRect, inner: ImRect, col: ImU32, rounding: number): void {
//    imgui.igRenderRectFilledWithHole(draw_list, outer, inner, col, rounding);
// }
// export function calcRoundingFlagsForRectInRect(r_in: ImRect, r_outer: ImRect, threshold: number): ImDrawFlags {
//   return imgui.igCalcRoundingFlagsForRectInRect(r_in, r_outer, threshold);
// }
// export function textEx(text: StringSource, text_end: StringSource, flags: ImGuiTextFlags): void {
//    imgui.igTextEx(cString(text), cString(text_end), flags);
// }
// export function buttonEx(label: StringSource, size_arg: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igButtonEx(cString(label), size_arg[BUFFER], flags);
// }
// export function arrowButtonEx(str_id: StringSource, dir: ImGuiDir, size_arg: ImVec2, flags: ImGuiButtonFlags): boolean {
//   return imgui.igArrowButtonEx(cString(str_id), dir, size_arg[BUFFER], flags);
// }
// export function imageButtonEx(id: ImGuiID, texture_id: ImTextureID, size: ImVec2, uv0: ImVec2, uv1: ImVec2, bg_col: ImVec4, tint_col: ImVec4): boolean {
//   return imgui.igImageButtonEx(id, texture_id, size[BUFFER], uv0[BUFFER], uv1[BUFFER], bg_col[BUFFER], tint_col[BUFFER]);
// }
// export function separatorEx(flags: ImGuiSeparatorFlags): void {
//    imgui.igSeparatorEx(flags);
// }
// export function checkboxFlags_S64Ptr(label: StringSource, flags: ImS64, flags_value: ImS64): boolean {
//   return imgui.igCheckboxFlags_S64Ptr(cString(label), flags, flags_value);
// }
// export function checkboxFlags_U64Ptr(label: StringSource, flags: ImU64, flags_value: ImU64): boolean {
//   return imgui.igCheckboxFlags_U64Ptr(cString(label), flags, flags_value);
// }
// export function closeButton(id: ImGuiID, pos: ImVec2): boolean {
//   return imgui.igCloseButton(id, pos[BUFFER]);
// }
// export function collapseButton(id: ImGuiID, pos: ImVec2, dock_node: ImGuiDockNode): boolean {
//   return imgui.igCollapseButton(id, pos[BUFFER], dock_node);
// }
// export function scrollbar(axis: ImGuiAxis): void {
//    imgui.igScrollbar(axis);
// }
// export function scrollbarEx(bb: ImRect, id: ImGuiID, axis: ImGuiAxis, scroll_v: ImS64, avail_v: ImS64, contents_v: ImS64, flags: ImDrawFlags): boolean {
//   return imgui.igScrollbarEx(bb, id, axis, scroll_v, avail_v, contents_v, flags);
// }
// export function getWindowScrollbarRect(pOut: ImRect, window: ImGuiWindow, axis: ImGuiAxis): void {
//    imgui.igGetWindowScrollbarRect(pOut, window, axis);
// }
// export function getWindowScrollbarID(window: ImGuiWindow, axis: ImGuiAxis): ImGuiID {
//   return imgui.igGetWindowScrollbarID(window, axis);
// }
// export function getWindowResizeCornerID(window: ImGuiWindow, n: number): ImGuiID {
//   return imgui.igGetWindowResizeCornerID(window, n);
// }
// export function getWindowResizeBorderID(window: ImGuiWindow, dir: ImGuiDir): ImGuiID {
//   return imgui.igGetWindowResizeBorderID(window, dir);
// }
// export function buttonBehavior(bb: ImRect, id: ImGuiID, out_hovered?: Uint8Array, out_held?: Uint8Array, flags: ImGuiButtonFlags): boolean {
//   return imgui.igButtonBehavior(bb, id, out_hovered ?? null, out_held ?? null, flags);
// }
// export function dragBehavior(id: ImGuiID, data_type: ImGuiDataType, v: BufferSource, v_speed: number, min: BufferSource, max: BufferSource, format: StringSource, flags: ImGuiSliderFlags): boolean {
//   return imgui.igDragBehavior(id, data_type, v, v_speed, min, max, cString(format), flags);
// }
// export function sliderBehavior(bb: ImRect, id: ImGuiID, data_type: ImGuiDataType, v: BufferSource, min: BufferSource, max: BufferSource, format: StringSource, flags: ImGuiSliderFlags, out_grab_bb: ImRect): boolean {
//   return imgui.igSliderBehavior(bb, id, data_type, v, min, max, cString(format), flags, out_grab_bb);
// }
// export function splitterBehavior(bb: ImRect, id: ImGuiID, axis: ImGuiAxis, size1: Float32Array, size2: Float32Array, min_size1: number, min_size2: number, hover_extend: number, hover_visibility_delay: number, bg_col: ImU32): boolean {
//   return imgui.igSplitterBehavior(bb, id, axis, size1, size2, min_size1, min_size2, hover_extend, hover_visibility_delay, bg_col);
// }
// export function treeNodeBehavior(id: ImGuiID, flags: ImGuiTreeNodeFlags, label: StringSource, label_end: StringSource): boolean {
//   return imgui.igTreeNodeBehavior(id, flags, cString(label), cString(label_end));
// }
// export function treePushOverrideID(id: ImGuiID): void {
//    imgui.igTreePushOverrideID(id);
// }
// export function treeNodeSetOpen(id: ImGuiID, open: boolean): void {
//    imgui.igTreeNodeSetOpen(id, open);
// }
// export function treeNodeUpdateNextOpen(id: ImGuiID, flags: ImGuiTreeNodeFlags): boolean {
//   return imgui.igTreeNodeUpdateNextOpen(id, flags);
// }
// export function dataTypeGetInfo(data_type: ImGuiDataType): ImGuiDataTypeInfo {
//   return imgui.igDataTypeGetInfo(data_type);
// }
// export function dataTypeFormatString(buf: StringSource, buf_size: number, data_type: ImGuiDataType, data: BufferSource, format: StringSource): number {
//   return imgui.igDataTypeFormatString(cString(buf), buf_size, data_type, data, cString(format));
// }
// export function dataTypeApplyOp(data_type: ImGuiDataType, op: number, output: BufferSource, arg_1: BufferSource, arg_2: BufferSource): void {
//    imgui.igDataTypeApplyOp(data_type, op, output, arg_1, arg_2);
// }
// export function dataTypeApplyFromText(buf: StringSource, data_type: ImGuiDataType, data: BufferSource, format: StringSource): boolean {
//   return imgui.igDataTypeApplyFromText(cString(buf), data_type, data, cString(format));
// }
// export function dataTypeCompare(data_type: ImGuiDataType, arg_1: BufferSource, arg_2: BufferSource): number {
//   return imgui.igDataTypeCompare(data_type, arg_1, arg_2);
// }
// export function dataTypeClamp(data_type: ImGuiDataType, data: BufferSource, min: BufferSource, max: BufferSource): boolean {
//   return imgui.igDataTypeClamp(data_type, data, min, max);
// }
// export function inputTextEx(label: StringSource, hint: StringSource, buf: StringSource, buf_size: number, size_arg: ImVec2, flags: ImGuiInputTextFlags, callback: ImGuiInputTextCallback, user_data: BufferSource): boolean {
//   return imgui.igInputTextEx(cString(label), cString(hint), cString(buf), buf_size, size_arg[BUFFER], flags, callback.pointer, user_data);
// }
// export function tempInputText(bb: ImRect, id: ImGuiID, label: StringSource, buf: StringSource, buf_size: number, flags: ImGuiInputTextFlags): boolean {
//   return imgui.igTempInputText(bb, id, cString(label), cString(buf), buf_size, flags);
// }
// export function tempInputScalar(bb: ImRect, id: ImGuiID, label: StringSource, data_type: ImGuiDataType, data: BufferSource, format: StringSource, clamp_min: BufferSource, clamp_max: BufferSource): boolean {
//   return imgui.igTempInputScalar(bb, id, cString(label), data_type, data, cString(format), clamp_min, clamp_max);
// }
// export function tempInputIsActive(id: ImGuiID): boolean {
//   return imgui.igTempInputIsActive(id);
// }
// export function getInputTextState(id: ImGuiID): ImGuiInputTextState {
//   return imgui.igGetInputTextState(id);
// }
// export function colorTooltip(text: StringSource, col: Float32Array, flags: ImGuiColorEditFlags): void {
//    imgui.igColorTooltip(cString(text), col, flags);
// }
// export function colorEditOptionsPopup(col: Float32Array, flags: ImGuiColorEditFlags): void {
//    imgui.igColorEditOptionsPopup(col, flags);
// }
// export function colorPickerOptionsPopup(ref_col: Float32Array, flags: ImGuiColorEditFlags): void {
//    imgui.igColorPickerOptionsPopup(ref_col, flags);
// }
// export function plotEx(plot_type: ImGuiPlotType, label: StringSource, data: Deno.UnsafeCallback, idx): number, data: BufferSource, values_count: number, values_offset: number, overlay_text: StringSource, scale_min: number, scale_max: number, frame_size: ImVec2): number {
//   return imgui.igPlotEx(plot_type, cString(label), data, idx), data, values_count, values_offset, cString(overlay_text), scale_min, scale_max, frame_size[BUFFER]);
// }
// export function shadeVertsLinearColorGradientKeepAlpha(draw_list: ImDrawList, vert_start_idx: number, vert_end_idx: number, gradient_p0: ImVec2, gradient_p1: ImVec2, col0: ImU32, col1: ImU32): void {
//    imgui.igShadeVertsLinearColorGradientKeepAlpha(draw_list, vert_start_idx, vert_end_idx, gradient_p0[BUFFER], gradient_p1[BUFFER], col0, col1);
// }
// export function shadeVertsLinearUV(draw_list: ImDrawList, vert_start_idx: number, vert_end_idx: number, a: ImVec2, b: ImVec2, uv_a: ImVec2, uv_b: ImVec2, clamp: boolean): void {
//    imgui.igShadeVertsLinearUV(draw_list, vert_start_idx, vert_end_idx, a[BUFFER], b[BUFFER], uv_a[BUFFER], uv_b[BUFFER], clamp);
// }
// export function gcCompactTransientMiscBuffers(): void {
//    imgui.igGcCompactTransientMiscBuffers();
// }
// export function gcCompactTransientWindowBuffers(window: ImGuiWindow): void {
//    imgui.igGcCompactTransientWindowBuffers(window);
// }
// export function gcAwakeTransientWindowBuffers(window: ImGuiWindow): void {
//    imgui.igGcAwakeTransientWindowBuffers(window);
// }
// export function debugLog(fmt: StringSource): void {
//    imgui.igDebugLog(cString(fmt));
// }
// export function debugLogV(fmt: StringSource): void {
//    imgui.igDebugLogV(cString(fmt));
// }
// export function errorCheckEndFrameRecover(log_callback: ImGuiErrorLogCallback, user_data: BufferSource): void {
//    imgui.igErrorCheckEndFrameRecover(log_callback.pointer, user_data);
// }
// export function errorCheckEndWindowRecover(log_callback: ImGuiErrorLogCallback, user_data: BufferSource): void {
//    imgui.igErrorCheckEndWindowRecover(log_callback.pointer, user_data);
// }
// export function errorCheckUsingSetCursorPosToExtendParentBoundaries(): void {
//    imgui.igErrorCheckUsingSetCursorPosToExtendParentBoundaries();
// }
// export function debugLocateItem(target_id: ImGuiID): void {
//    imgui.igDebugLocateItem(target_id);
// }
// export function debugLocateItemOnHover(target_id: ImGuiID): void {
//    imgui.igDebugLocateItemOnHover(target_id);
// }
// export function debugLocateItemResolveWithLastItem(): void {
//    imgui.igDebugLocateItemResolveWithLastItem();
// }
// export function debugDrawItemRect(col: ImU32): void {
//    imgui.igDebugDrawItemRect(col);
// }
// export function debugStartItemPicker(): void {
//    imgui.igDebugStartItemPicker();
// }
// export function showFontAtlas(atlas: ImFontAtlas): void {
//    imgui.igShowFontAtlas(atlas);
// }
// export function debugHookIdInfo(id: ImGuiID, data_type: ImGuiDataType, data_id: BufferSource, data_id_end: BufferSource): void {
//    imgui.igDebugHookIdInfo(id, data_type, data_id, data_id_end);
// }
// export function debugNodeColumns(columns: ImGuiOldColumns): void {
//    imgui.igDebugNodeColumns(columns);
// }
// export function debugNodeDockNode(node: ImGuiDockNode, label: StringSource): void {
//    imgui.igDebugNodeDockNode(node, cString(label));
// }
// export function debugNodeDrawList(window: ImGuiWindow, viewport: ImGuiViewportP, draw_list: ImDrawList, label: StringSource): void {
//    imgui.igDebugNodeDrawList(window, viewport, draw_list, cString(label));
// }
// export function debugNodeDrawCmdShowMeshAndBoundingBox(out_draw_list: ImDrawList, draw_list: ImDrawList, draw_cmd: ImDrawCmd, show_mesh: boolean, show_aabb: boolean): void {
//    imgui.igDebugNodeDrawCmdShowMeshAndBoundingBox(out_draw_list, draw_list, draw_cmd, show_mesh, show_aabb);
// }
// export function debugNodeFont(font: ImFont): void {
//    imgui.igDebugNodeFont(font);
// }
// export function debugNodeFontGlyph(font: ImFont, glyph: ImFontGlyph): void {
//    imgui.igDebugNodeFontGlyph(font, glyph);
// }
// export function debugNodeStorage(storage: ImGuiStorage, label: StringSource): void {
//    imgui.igDebugNodeStorage(storage, cString(label));
// }
// export function debugNodeTabBar(tab_bar: ImGuiTabBar, label: StringSource): void {
//    imgui.igDebugNodeTabBar(tab_bar, cString(label));
// }
// export function debugNodeTable(table: ImGuiTable): void {
//    imgui.igDebugNodeTable(table);
// }
// export function debugNodeTableSettings(settings: ImGuiTableSettings): void {
//    imgui.igDebugNodeTableSettings(settings);
// }
// export function debugNodeInputTextState(state: ImGuiInputTextState): void {
//    imgui.igDebugNodeInputTextState(state);
// }
// export function debugNodeWindow(window: ImGuiWindow, label: StringSource): void {
//    imgui.igDebugNodeWindow(window, cString(label));
// }
// export function debugNodeWindowSettings(settings: ImGuiWindowSettings): void {
//    imgui.igDebugNodeWindowSettings(settings);
// }
// export function debugNodeWindowsList(windows: ImVector_ImGuiWindowPtr, label: StringSource): void {
//    imgui.igDebugNodeWindowsList(windows, cString(label));
// }
// export function debugNodeWindowsListByBeginStackParent(windows: Deno.UnsafeCallback, windows_size: number, parent_in_begin_stack: ImGuiWindow): void {
//    imgui.igDebugNodeWindowsListByBeginStackParent(windows, windows_size, parent_in_begin_stack);
// }
// export function debugNodeViewport(viewport: ImGuiViewportP): void {
//    imgui.igDebugNodeViewport(viewport);
// }
// export function debugRenderKeyboardPreview(draw_list: ImDrawList): void {
//    imgui.igDebugRenderKeyboardPreview(draw_list);
// }
// export function debugRenderViewportThumbnail(draw_list: ImDrawList, viewport: ImGuiViewportP, bb: ImRect): void {
//    imgui.igDebugRenderViewportThumbnail(draw_list, viewport, bb);
// }
// export function isKeyPressedMap(key: ImGuiKey, repeat: boolean): boolean {
//   return imgui.igIsKeyPressedMap(key, repeat);
// }
// export function imFontAtlasGetBuilderForStbTruetype(): ImFontBuilderIO {
//   return imgui.igImFontAtlasGetBuilderForStbTruetype();
// }
// export function imFontAtlasBuildInit(atlas: ImFontAtlas): void {
//    imgui.igImFontAtlasBuildInit(atlas);
// }
// export function imFontAtlasBuildSetupFont(atlas: ImFontAtlas, font: ImFont, font_config: ImFontConfig, ascent: number, descent: number): void {
//    imgui.igImFontAtlasBuildSetupFont(atlas, font, font_config, ascent, descent);
// }
// export function imFontAtlasBuildPackCustomRects(atlas: ImFontAtlas, stbrp_context_opaque: BufferSource): void {
//    imgui.igImFontAtlasBuildPackCustomRects(atlas, stbrp_context_opaque);
// }
// export function imFontAtlasBuildFinish(atlas: ImFontAtlas): void {
//    imgui.igImFontAtlasBuildFinish(atlas);
// }
// export function imFontAtlasBuildRender8bppRectFromString(atlas: ImFontAtlas, x: number, y: number, w: number, h: number, in_str: StringSource, in_marker_char: number, in_marker_pixel_value: number): void {
//    imgui.igImFontAtlasBuildRender8bppRectFromString(atlas, x, y, w, h, cString(in_str), in_marker_char, in_marker_pixel_value);
// }
// export function imFontAtlasBuildRender32bppRectFromString(atlas: ImFontAtlas, x: number, y: number, w: number, h: number, in_str: StringSource, in_marker_char: number, in_marker_pixel_value: number): void {
//    imgui.igImFontAtlasBuildRender32bppRectFromString(atlas, x, y, w, h, cString(in_str), in_marker_char, in_marker_pixel_value);
// }
// export function imFontAtlasBuildMultiplyCalcLookupTable(out_table: unsigned char[], in_multiply_factor: number): void {
//    imgui.igImFontAtlasBuildMultiplyCalcLookupTable(out_table, in_multiply_factor);
// }
// export function imFontAtlasBuildMultiplyRectAlpha8(table: unsigned char[], pixels: unsigned char, x: number, y: number, w: number, h: number, stride: number): void {
//    imgui.igImFontAtlasBuildMultiplyRectAlpha8(table, pixels, x, y, w, h, stride);
// }
// export function logText(fmt: CONST char): void {
//    imgui.igLogText(fmt);
// }
// export function imGuiTextBuffer_appendf(buffer: struct ImGuiTextBuffer, fmt: StringSource): void {
//    imgui.ImGuiTextBuffer_appendf(buffer, cString(fmt));
// }
// export function gET_FLT_MAX(): number {
//   return imgui.igGET_FLT_MAX();
// }
// export function gET_FLT_MIN(): number {
//   return imgui.igGET_FLT_MIN();
// }
// export function imVector_ImWchar_create(): ImVector_ImWchar {
//   return imgui.ImVector_ImWchar_create();
// }
// export function imVector_ImWchar_destroy(self: ImVector_ImWchar): void {
//    imgui.ImVector_ImWchar_destroy(self);
// }
// export function imVector_ImWchar_Init(p: ImVector_ImWchar): void {
//    imgui.ImVector_ImWchar_Init(p);
// }
// export function imVector_ImWchar_UnInit(p: ImVector_ImWchar): void {
//    imgui.ImVector_ImWchar_UnInit(p);
// }