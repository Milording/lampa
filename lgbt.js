/* Lampa plugin: never block LGBT titles. Marker 0.0.0.0 stops Lampa appending ?params to this data: URL. */
(function () {
  // Lampa only blocks when window.lampa_settings.lgbt (the downloaded block list) is set,
  // gated by `lgbt_content_block || region in [ru, by]`. Region falls back to "ru" whenever
  // geo.<cub mirror> answers empty, so we turn on Lampa's own kill switch and keep the list empty.
  var s = window.lampa_settings || (window.lampa_settings = {});
  s.disable_features = s.disable_features || {};
  s.disable_features.lgbt = true;
  Object.defineProperty(s, 'lgbt', { configurable: true, get: function () {}, set: function () {} });
  if (window.Lampa && Lampa.Storage) Lampa.Storage.set('lgbt_content_block', false);
})();
