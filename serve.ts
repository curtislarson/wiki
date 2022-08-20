#!/usr/bin/env -S deno run --allow-net --no-check --no-config

import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

serve(() => Response.redirect("https://curtislarson.dev"));
