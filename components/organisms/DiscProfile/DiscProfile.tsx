"use client"

import { useState } from "react"
import Image from "next/image"
import Button from "@/components/atoms/Button/Button"
import Link from "next/link"
import type { User } from "@/types/user"

interface DiscProfileProps {
  userData: User
}

const DiscProfile = ({ userData }: DiscProfileProps) => {
  const [hasDiscProfile, setHasDiscProfile] = useState(!!userData.discProfile)

  if (!hasDiscProfile) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <Image src="/placeholder.svg?key=6q77d" alt="DISC Profile" width={150} height={150} className="mx-auto" />
        </div>
        <h3 className="text-xl font-bold mb-2">Aún no has realizado la evaluación DISC</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Descubre tu perfil DISC y obtén información valiosa sobre tu estilo de comportamiento y comunicación.
        </p>
        <Link href="/disc">
          <Button>Realizar evaluación DISC</Button>
        </Link>
      </div>
    )
  }

  const { discProfile } = userData

  const getProfileColor = (type: string) => {
    switch (type) {
      case "D":
        return "bg-primary text-white"
      case "I":
        return "bg-blue-500 text-white"
      case "S":
        return "bg-green-500 text-white"
      case "C":
        return "bg-purple-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getProfileDescription = (type: string) => {
    switch (type) {
      case "D":
        return "Dominante, directo y decisivo. Te enfocas en resultados y asumes retos con determinación."
      case "I":
        return "Influyente, entusiasta y optimista. Disfrutas interactuando con otros y eres persuasivo."
      case "S":
        return "Estable, paciente y colaborador. Valoras la armonía y eres un excelente oyente."
      case "C":
        return "Concienzudo, preciso y analítico. Valoras la exactitud y los procesos estructurados."
      default:
        return ""
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-secondary mb-6">Mi perfil DISC</h2>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="text-center">
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold ${getProfileColor(
                discProfile?.primaryType || "D",
              )}`}
            >
              {discProfile?.primaryType}
            </div>
            {discProfile?.secondaryType && (
              <div className="mt-4 text-sm">
                <span className="font-medium">Tipo secundario:</span>{" "}
                <span className={`px-2 py-1 rounded-md ${getProfileColor(discProfile.secondaryType)}`}>
                  {discProfile.secondaryType}
                </span>
              </div>
            )}
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-3">
              Perfil {discProfile?.primaryType}
              {discProfile?.secondaryType ? `/${discProfile.secondaryType}` : ""}
            </h3>

            <p className="text-gray-700 mb-4">{getProfileDescription(discProfile?.primaryType || "D")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-medium mb-2">Fortalezas</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {discProfile?.primaryType === "D" && (
                    <>
                      <li>Toma de decisiones rápida</li>
                      <li>Orientación a resultados</li>
                      <li>Liderazgo natural</li>
                      <li>Asume retos con facilidad</li>
                    </>
                  )}
                  {discProfile?.primaryType === "I" && (
                    <>
                      <li>Excelentes habilidades comunicativas</li>
                      <li>Entusiasmo contagioso</li>
                      <li>Capacidad de persuasión</li>
                      <li>Creatividad e innovación</li>
                    </>
                  )}
                  {discProfile?.primaryType === "S" && (
                    <>
                      <li>Excelente capacidad de escucha</li>
                      <li>Lealtad y confiabilidad</li>
                      <li>Paciencia y perseverancia</li>
                      <li>Trabajo en equipo</li>
                    </>
                  )}
                  {discProfile?.primaryType === "C" && (
                    <>
                      <li>Precisión y atención al detalle</li>
                      <li>Pensamiento analítico</li>
                      <li>Organización y planificación</li>
                      <li>Altos estándares de calidad</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-medium mb-2">Áreas de mejora</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {discProfile?.primaryType === "D" && (
                    <>
                      <li>Impaciencia con los demás</li>
                      <li>Puede parecer demasiado directo</li>
                      <li>Tendencia a dominar conversaciones</li>
                      <li>Dificultad para delegar</li>
                    </>
                  )}
                  {discProfile?.primaryType === "I" && (
                    <>
                      <li>Puede ser desorganizado</li>
                      <li>Tendencia a hablar más que escuchar</li>
                      <li>Dificultad con los detalles</li>
                      <li>Impulsividad en decisiones</li>
                    </>
                  )}
                  {discProfile?.primaryType === "S" && (
                    <>
                      <li>Resistencia al cambio</li>
                      <li>Dificultad para expresar desacuerdos</li>
                      <li>Puede ser demasiado complaciente</li>
                      <li>Indecisión en momentos críticos</li>
                    </>
                  )}
                  {discProfile?.primaryType === "C" && (
                    <>
                      <li>Perfeccionismo excesivo</li>
                      <li>Análisis paralizante</li>
                      <li>Crítica hacia ideas nuevas</li>
                      <li>Dificultad para expresar emociones</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <Button variant="outline">Ver informe completo</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-bold mb-4">Distribución de tu perfil DISC</h3>

          <div className="grid grid-cols-4 gap-2 mb-2">
            <div
              className="bg-primary h-24 rounded-md"
              style={{ height: `${(discProfile?.dominance || 0) * 100}px` }}
            ></div>
            <div
              className="bg-blue-500 h-24 rounded-md"
              style={{ height: `${(discProfile?.influence || 0) * 100}px` }}
            ></div>
            <div
              className="bg-green-500 h-24 rounded-md"
              style={{ height: `${(discProfile?.steadiness || 0) * 100}px` }}
            ></div>
            <div
              className="bg-purple-500 h-24 rounded-md"
              style={{ height: `${(discProfile?.compliance || 0) * 100}px` }}
            ></div>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center text-sm">
            <div>D ({Math.round((discProfile?.dominance || 0) * 100)}%)</div>
            <div>I ({Math.round((discProfile?.influence || 0) * 100)}%)</div>
            <div>S ({Math.round((discProfile?.steadiness || 0) * 100)}%)</div>
            <div>C ({Math.round((discProfile?.compliance || 0) * 100)}%)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscProfile
